"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalPlayerBuff_1 = require("../GlobalBuff/DtGlobalPlayerBuff");
class EC_EX1_072_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let buff = new DtGlobalPlayerBuff_1.DtGlobalPlayerBuff(this.parent, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtBuffType.MAGIC_CARD_BE_PROHIBIT_USE, null, this);
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.GetManager().globalBuffMgr.AddPlayerBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_072_1;
//# sourceMappingURL=EC_EX1_072_1.js.map