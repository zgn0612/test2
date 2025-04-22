"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_SetOrigin_ChooseIsOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsOrigin");
class EC_EX2_007_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetCondition(this.Con);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10985, true));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsOrigin_1.DtCardOperate_SetOrigin_ChooseIsOrigin(0));
    }
    Con() {
        let hasOther = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981) && card != this.parent;
        });
        return hasOther == false;
    }
}
exports.default = EC_EX2_007_2;
//# sourceMappingURL=EC_EX2_007_2.js.map