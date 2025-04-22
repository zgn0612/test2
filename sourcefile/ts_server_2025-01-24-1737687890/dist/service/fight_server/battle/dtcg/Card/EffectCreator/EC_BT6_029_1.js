"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEnum_1 = require("../../Data/DtEnum");
class EC_BT6_029_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffect(this.Effect2, null);
    }
    Effect1() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            this.GetManager().OnCardDiscardEvoOriginWhere(this.parent, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    Effect2() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.GetOriginDigimonCount() == 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        if (count > 0) {
            this.ThisCardUseCost(-count);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_029_1;
//# sourceMappingURL=EC_BT6_029_1.js.map