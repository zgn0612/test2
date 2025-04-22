"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerAttackOver_1 = require("../Effect/TriggerCondition/DtConTriggerAttackOver");
const DtCardFilter_CanIngoreEvoRequire_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CanIngoreEvoRequire");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_ForceEvo_ToSelf_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ForceEvo_ToSelf");
class EC_BT8_081_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAttackOver);
        effect.SetEffectActivateAsk();
        let ctri = new DtConTriggerAttackOver_1.DtConTriggerAttackOver(DtEnum_1.DtEffectRoundValid.Both, DtFsmAttackEnum_1.DtFsmAttackType.None);
        let ccard = ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Purple, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccard.SetCondition(this, (card) => { return this.parent == card; });
        effect.SetTriggerCondition(ctri);
        this.skill1(effect);
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10829, true));
        skill.SetFilter(new DtCardFilter_CanIngoreEvoRequire_1.DtCardFilter_CanIngoreEvoRequire());
        skill.SetOperate(new DtCardOperate_ForceEvo_ToSelf_1.DtCardOperate_ForceEvo_ToSelf(0, true));
    }
}
exports.default = EC_BT8_081_1;
//# sourceMappingURL=EC_BT8_081_1.js.map