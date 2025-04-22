"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_DrawCardFromDefense_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DrawCardFromDefense");
const DtMessageData_1 = require("../../Message/DtMessageData");
class EC_BT5_037_1 extends DtGroupBrowseCardsCreator_1.default {
    group;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetCondition(() => {
            return this.GetPlayer().areaDefense.CardCount() > 0;
        });
        this.group = this.CheckALLSelfDefense(effect, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_12) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_28);
            }));
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetOperate(new DtCardOperate_DrawCardFromDefense_1.DtCardOperate_DrawCardFromDefense(DtMessageData_1.DtProtoEnum_MoveReason.CardEffectMoveToHandAndShowCard));
        });
        effect.SetEffect(this.Restore, null);
        effect.SetEffect(this.RandomSort, null);
    }
    Restore() {
        let cards = this.group.GetHasSuccesscards();
        if (cards && cards.length > 0) {
            this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    RandomSort() {
        this.GetPlayer().areaDefense.RandomSort();
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_037_1;
//# sourceMappingURL=EC_BT5_037_1.js.map