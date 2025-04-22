"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_083_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.discarddef, null);
        effect.SetEffect(this.cost, null);
    }
    discarddef() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 5);
        return DtEffect_1.DtEffectResult.Next;
    }
    cost() {
        let count = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10099);
        });
        if (count > 0) {
            this.ThisCardUseCost(-1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_083_2;
//# sourceMappingURL=EC_BT8_083_2.js.map