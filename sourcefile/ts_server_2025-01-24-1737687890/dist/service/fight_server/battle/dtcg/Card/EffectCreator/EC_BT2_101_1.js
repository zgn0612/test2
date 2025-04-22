"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT2_101_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let cards = this.GetOppPlayer().areaInBattle.GetListWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetLastDP() <= 6000;
        });
        for (let i = 0; i < cards.length; i++) {
            this.GetManager().OnSetCardResetState(this.parent, cards[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_101_1;
//# sourceMappingURL=EC_BT2_101_1.js.map