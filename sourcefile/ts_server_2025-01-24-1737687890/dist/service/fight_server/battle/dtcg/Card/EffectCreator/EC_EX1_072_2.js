"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalPlayerBuff_1 = require("../GlobalBuff/DtGlobalPlayerBuff");
class EC_EX1_072_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.Effect, null);
        effect.SetEffect(this.Effect2, null);
    }
    Effect() {
        let buff = new DtGlobalPlayerBuff_1.DtGlobalPlayerBuff(this.parent, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtBuffType.MAGIC_CARD_BE_PROHIBIT_USE, null, this);
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddPlayerBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    Effect2() {
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_072_2;
//# sourceMappingURL=EC_EX1_072_2.js.map