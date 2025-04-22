"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_EX2_072_2 extends DtGroupBrowseCardsCreator_1.default {
    selectCard;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(() => { this.selectCard = null; });
        this.SetCommonBrowseFromDeckThenBottom(effect, 5, 2, (skl, idx) => {
            if (idx == 0) {
                skl.GetChooseMachine().SetCanCancel(true);
                skl.Immediately = true;
                skl.cancelInterruptNext = false;
                skl.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, this.Filter));
                skl.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
                    this.selectCard = card;
                }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
            }
            else {
                skl.GetChooseMachine().SetInitEvent(this, (choose) => {
                    choose.SetActive(this.selectCard == null);
                });
                skl.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
                skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
            }
        });
        this.SkillEvobattle(effect);
    }
    Filter(card, effect) {
        if (card.ColorIs(DtEnum_1.DtCardColor.White)) {
            return false;
        }
        let canevo = this.GetPlayer().areaInBattle.CheckWithCondition((btcard) => {
            if (btcard.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.CheckCanEvo(btcard).resultCost >= 0) {
                    return true;
                }
            }
            return false;
        });
        return canevo;
    }
    SkillEvobattle(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            choose.SetActive(this.selectCard != null);
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return this.selectCard.CheckCanEvo(card).resultCost >= 0;
        }));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            let fsm = effect.parent.parent.manager.ForceDigimonEvo(this.GetPlayer(), this.selectCard, card, 0);
            fsm.SetNoCost();
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
}
exports.default = EC_EX2_072_2;
//# sourceMappingURL=EC_EX2_072_2.js.map