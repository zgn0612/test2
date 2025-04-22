"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_001_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition(effect) {
        let hasJier = this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10109);
        let hasgula = this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10110);
        let hasgongjue = this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10103);
        return hasJier || hasgula || hasgongjue;
    }
    Effect(effect) {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_001_O_1;
//# sourceMappingURL=EC_EX2_001_O_1.js.map