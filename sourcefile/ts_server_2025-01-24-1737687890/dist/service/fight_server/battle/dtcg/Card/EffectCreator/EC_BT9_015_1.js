"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT9_015_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangePower_1.DtBuffChangePower(1).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        let next = this.parent.CheckOriginListWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10019, true) && card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11023, true);
        });
        if (next) {
            effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(3000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT9_015_1;
//# sourceMappingURL=EC_BT9_015_1.js.map