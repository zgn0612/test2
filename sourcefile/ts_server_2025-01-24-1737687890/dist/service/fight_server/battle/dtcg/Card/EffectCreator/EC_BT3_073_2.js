"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT3_073_2 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.ChangeCount, null);
        this.SetCommonBrowseFromDeckThenBottom(effect, 0, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 5));
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.ColorIs(DtEnum_1.DtCardColor.Red) || card.ColorIs(DtEnum_1.DtCardColor.Black);
            }));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
    Con() {
        let c = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        return c > 0;
    }
    ChangeCount() {
        let c = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        this.ChangeBrowseCount(c);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_073_2;
//# sourceMappingURL=EC_BT3_073_2.js.map