"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_071_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let buff = this.GetGlobalPlayerBuff(DtEnum_1.DtBuffType.CAN_NOT_REDUCE_MONSTER_PLAY_COSTS, this.Con, DtEnum_1.DtBuffEffectToType.Both, DtEnum_1.DtEffectRoundValid.Both);
        this.GetManager().globalBuffMgr.AddPlayerBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    Con(sk, player) {
        return true;
    }
}
exports.default = EC_BT8_071_1;
//# sourceMappingURL=EC_BT8_071_1.js.map