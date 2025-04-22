"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardOperate_DrawCardFromDefense_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DrawCardFromDefense");
class EC_BT1_087_2 extends DtGroupBrowseCardsCreator_1.default {
    group;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetCondition(() => {
            return this.GetPlayer().areaDefense.CardCount() > 0;
        });
        this.group = this.CheckALLSelfDefense(effect, 1, (skill, idx) => {
            skill.SetOperate(new DtCardOperate_DrawCardFromDefense_1.DtCardOperate_DrawCardFromDefense(DtMessageData_1.DtProtoEnum_MoveReason.CardEffectMoveToHandAndShowCard));
        });
        effect.SetEffect(this.Restore, null);
        effect.SetEffect(this.RandomSort, null);
    }
    Restore() {
        let cards = this.group.GetHasSuccesscards();
        if (cards && cards.length > 0) {
            if (cards[0].ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    RandomSort() {
        this.GetPlayer().areaDefense.RandomSort();
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_087_2;
//# sourceMappingURL=EC_BT1_087_2.js.map