"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_DiscardOriginCard_BaoLie_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCard_BaoLie");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT7_040_2 extends DtEnhanceEffectCreatorts_1.default {
    Count = 0;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetCondition(this.Con);
        effect.name = DtEnum_1.EFFECT_NAME.DIGIMON_BAOLIE;
        effect.SetInitFunc(() => { this.Count = 0; });
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Con() {
        return this.parent.GetOriginDigimonCount() >= 1;
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 4, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetOperate(new DtCardOperate_DiscardOriginCard_BaoLie_1.DtCardOperate_DiscardOriginCard_BaoLie());
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, () => { this.Count++; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.CAL_NUMBER));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -3000, DtEnum_1.DtBuffDurationType.RoundOver));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (c, e) => {
            this.Count--;
            if (this.Count > 0) {
                e.SetToStateStepWithStageId(2);
            }
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
}
exports.default = EC_BT7_040_2;
//# sourceMappingURL=EC_BT7_040_2.js.map