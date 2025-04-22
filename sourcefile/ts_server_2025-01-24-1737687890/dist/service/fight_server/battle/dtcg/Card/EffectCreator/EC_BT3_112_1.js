"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT3_112_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
        effect.SetEffect(this.EffectDestroy, null);
    }
    Effect() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CanDegenerate(1) > 0) {
                this.GetManager().OnCardDegenerate(this.parent, card, 1);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectDestroy() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.GetLastDP() <= this.GetDPDestory(5000) && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_112_1;
//# sourceMappingURL=EC_BT3_112_1.js.map