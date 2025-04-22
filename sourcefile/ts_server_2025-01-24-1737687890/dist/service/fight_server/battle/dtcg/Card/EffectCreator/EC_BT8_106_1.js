"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT8_106_1 extends DtGroupBrowseCardsCreator_1.default {
    group;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnUseEffect);
        this.group = this.SetCommonBrowseFrommDeckThenDiscard(effect, 3, 3, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10334));
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                let allcost = 0;
                let cards = this.group.GetHasSelectCards();
                let count = this.GetPlayer().GetBattleCardsReLimit();
                if (cards.length >= count) {
                    return false;
                }
                for (let i = 0; i < cards.length; i++) {
                    allcost += cards[i].GetConfigCost();
                }
                return card.GetConfigCost() + allcost <= 15;
            }));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
        this.skill(effect);
    }
    skill(eff) {
        let skill = this.SetSkillPlayerChoose_Mul(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 0, 1);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let cards = this.group.GetHasSuccesscards();
            if (cards.length > 0) {
                choose.SetActive(true);
                choose.ChangeTypeNum(cards.length);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 6, DtEnum_1.DtAreaType.None));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_BT8_106_1;
//# sourceMappingURL=EC_BT8_106_1.js.map