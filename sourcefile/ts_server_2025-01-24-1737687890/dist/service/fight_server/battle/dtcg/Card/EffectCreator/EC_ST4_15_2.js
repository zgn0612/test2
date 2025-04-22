"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST4_15_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateMagicDefenseActiveMainEffect();
        effect.SetEffect(this.Effect2, null);
    }
    Effect2() {
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST4_15_2;
//# sourceMappingURL=EC_ST4_15_2.js.map