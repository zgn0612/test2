"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_111_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let c = Math.floor(this.GetPlayer().areaGraveyard.CardCount() / 10);
        if (c > 0) {
            this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetOppPlayer(), c * 3);
            effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(c * 3000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_111_2;
//# sourceMappingURL=EC_BT8_111_2.js.map