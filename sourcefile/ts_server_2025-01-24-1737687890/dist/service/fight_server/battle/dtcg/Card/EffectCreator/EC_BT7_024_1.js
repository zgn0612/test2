"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_024_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.GetOriginDigimonCount() == 0;
        });
        if (count > 0) {
            this.GetManager().OnDrawCard(this.parent, count, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_024_1;
//# sourceMappingURL=EC_BT7_024_1.js.map