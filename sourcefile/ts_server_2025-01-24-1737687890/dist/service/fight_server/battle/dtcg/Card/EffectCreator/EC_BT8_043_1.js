"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT8_043_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(true, (effect) => {
            this.CreateSkill(effect);
        });
    }
    CreateSkill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10303, true));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
        return skill;
    }
    OnBeforePlayCon(msg) {
        if (this.parent.whereAreaType == DtEnum_1.DtAreaType.HAND) {
            let hasEm = this.GetPlayer().areaInBattle.CheckWithCondition((card) => { return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10303, true) && card.ColorIs(DtEnum_1.DtCardColor.Purple); });
            if (hasEm) {
                return true;
            }
        }
        return false;
    }
    OnGetChangeCost() {
        return -8;
    }
}
exports.default = EC_BT8_043_1;
//# sourceMappingURL=EC_BT8_043_1.js.map