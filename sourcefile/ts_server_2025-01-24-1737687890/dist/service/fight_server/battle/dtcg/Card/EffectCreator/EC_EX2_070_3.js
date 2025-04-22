"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_EX2_070_3 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        this.SetCommonBrowseFromDeckThenBottom(effect, 3, 1, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_070_3;
//# sourceMappingURL=EC_EX2_070_3.js.map