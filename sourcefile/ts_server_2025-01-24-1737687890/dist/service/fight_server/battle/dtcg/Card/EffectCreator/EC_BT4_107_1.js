"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_EffectHas_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_EffectHas");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT4_107_1 extends DtGroupBrowseCardsCreator_1.default {
    group;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.group = this.SetGetAllBrowseFromDeckThenBottom(effect, 3, (skl) => {
            skl.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skl.SetFilter(new DtCardFilter_EffectHas_1.DtCardFilter_EffectHas(DtEnum_1.EFFECT_NAME.DIGIMON_BAOLIE));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
        this.Skill(effect);
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1, 2);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let cards = this.group.GetHasSuccesscards();
            if (cards.length == 0) {
                choose.SetActive(false);
            }
            else {
                choose.SetActive(true);
                choose.ChangeTypeNum(cards.length);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
}
exports.default = EC_BT4_107_1;
//# sourceMappingURL=EC_BT4_107_1.js.map