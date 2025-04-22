"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_SetOriginCustom_ChooseIsParent_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOriginCustom_ChooseIsParent");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_EX2_049_1 extends DtGroupBrowseCardsCreator_1.default {
    card;
    canActivate = false;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(() => { this.card = null; });
        effect.SetCondition(this.Con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        this.Skill(effect);
        this.Skill2(effect);
    }
    Con() {
        this.canActivate = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true);
        });
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Skill(effect) {
        let group = this.SetCommonBrowseFromDeckThenBottom(effect, 5, 1, (skl) => {
            skl.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10985));
            skl.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, () => {
                return this.canActivate;
            }));
            skl.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.card = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
        });
        group.SetFirstType(DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over);
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            choose.SetActive(this.card != null);
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true));
        skill.SetOperate(new DtCardOperate_SetOriginCustom_ChooseIsParent_1.DtCardOperate_SetOriginCustom_ChooseIsParent(0, this, () => { return this.card; }));
    }
}
exports.default = EC_EX2_049_1;
//# sourceMappingURL=EC_EX2_049_1.js.map