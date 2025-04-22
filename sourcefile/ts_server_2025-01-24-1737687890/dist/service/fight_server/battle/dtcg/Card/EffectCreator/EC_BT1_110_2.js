"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT1_110_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let eff = this.GetNewEffect();
        eff.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        eff.SetEffect(this.Effect1, null);
    }
    Effect1() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER) == false) {
                    this.GetManager().OnSetCardResetState(this.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_110_2;
//# sourceMappingURL=EC_BT1_110_2.js.map