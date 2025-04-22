"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_DiscardOriginCustom_ChooseIsOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DiscardOriginCustom_ChooseIsOrigin");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_EX2_055_1 extends DtEffectChangePlayCostCreator_1.default {
    battleCard;
    SetEffect() {
        this.CreateBeforePlaySetCost(true, (effect) => {
            this.CreateSkill(effect);
            this.CreateSkill2(effect);
        });
    }
    CreateSkill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetInitEvent(this, () => {
            this.battleCard = null;
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.battleCard = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
        return skill;
    }
    CreateSkill2(effect) {
        let skill = this.SetSkillPlayerChoose_GreateEqual(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 7, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchCustom(() => {
            if (this.battleCard) {
                return this.battleCard.GetOriginDigimonList();
            }
            return null;
        });
        skill.SetOperate(new DtCardOperate_DiscardOriginCustom_ChooseIsOrigin_1.DtCardOperate_DiscardOriginCustom_ChooseIsOrigin(this, () => { return this.battleCard; }));
        return skill;
    }
    OnGetChangeCost() {
        return 0;
    }
    OnBeforePlayCon(msg) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true) && card.GetOriginDigimonCount() >= 7;
        });
    }
}
exports.default = EC_EX2_055_1;
//# sourceMappingURL=EC_EX2_055_1.js.map