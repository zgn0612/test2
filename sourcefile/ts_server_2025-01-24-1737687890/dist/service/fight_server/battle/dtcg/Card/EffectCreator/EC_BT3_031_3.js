"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT3_031_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetPlayer().areaInBattle.ForeachCards((card) => {
            if (card.HasBuff(DtEnum_1.DtBuffType.DISTURB)) {
                this.GetManager().OnSetCardActiveState(this.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_031_3;
//# sourceMappingURL=EC_BT3_031_3.js.map