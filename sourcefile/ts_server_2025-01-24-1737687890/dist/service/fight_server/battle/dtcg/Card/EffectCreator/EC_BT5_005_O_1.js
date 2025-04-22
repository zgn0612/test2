"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_005_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect1.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect1.SetCondition(this.Con);
        effect1.SetEffect(this.Effect1, null);
    }
    Con(effect) {
        return this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_38);
    }
    Effect1(effect) {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_005_O_1;
//# sourceMappingURL=EC_BT5_005_O_1.js.map