"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_SetOriginCustom_ChooseIsParent_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOriginCustom_ChooseIsParent");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT5_047_1 extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetInitFunc(() => { this.card = null; });
        this.EffChooseBalu(effect);
        this.EffChooseAddOri(effect);
    }
    EffChooseBalu(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10062, true));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, this.customOp, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    EffChooseAddOri(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Green));
        skill.SetOperate(new DtCardOperate_SetOriginCustom_ChooseIsParent_1.DtCardOperate_SetOriginCustom_ChooseIsParent(0, this, () => { return this.card; }));
    }
    customOp(card, effect) {
        this.card = card;
    }
}
exports.default = EC_BT5_047_1;
//# sourceMappingURL=EC_BT5_047_1.js.map