"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtMessageData_1 = require("../../Message/DtMessageData");
class EC_BT1_101_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.DiscardAll(card);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    DiscardAll(card) {
        let oris = card.GetOriginDigimonList();
        if (oris.length > 0) {
            for (let i = oris.length - 1; i >= 0; i--) {
                this.GetManager().OnCardDiscardEvoOriginCard(this.parent, card, oris[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
    }
}
exports.default = EC_BT1_101_1;
//# sourceMappingURL=EC_BT1_101_1.js.map