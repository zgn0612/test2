"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT6_103_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.EffectReset, null);
        effect.SetEffect(this.EffectCost, null);
    }
    EffectReset() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.GetManager().OnSetCardResetState(this.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectCost() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
                return true;
            }
        });
        this.ThisCardUseCost(-count);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_103_1;
//# sourceMappingURL=EC_BT6_103_1.js.map