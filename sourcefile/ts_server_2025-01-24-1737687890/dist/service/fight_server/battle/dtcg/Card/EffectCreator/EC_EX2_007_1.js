"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_007_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect(effect) {
        effect.AddNewBuffTo(this.GetBuff_Attribute(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, this.DpBuffCon), this.parent);
        effect.AddNewBuffTo(this.GetBuff_Attribute(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT, this.DpBuffCon), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
    DpBuffCon() {
        return true;
    }
}
exports.default = EC_EX2_007_1;
//# sourceMappingURL=EC_EX2_007_1.js.map