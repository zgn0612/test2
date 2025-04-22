"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT6_067_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let lowCost = 10000000;
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (lowCost > card.GetConfigCost()) {
                    lowCost = card.GetConfigCost();
                }
            }
        });
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetConfigCost() == lowCost) {
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_067_1;
//# sourceMappingURL=EC_BT6_067_1.js.map