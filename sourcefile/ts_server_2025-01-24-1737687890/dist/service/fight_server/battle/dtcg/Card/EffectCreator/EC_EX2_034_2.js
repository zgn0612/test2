"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_034_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffectDirect();
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let buff = this.GetGlobalBuff_ChangeDP(this.buffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    buffCon(buff, card) {
        let hasBlck = card.HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER);
        if (hasBlck) {
            return 2000;
        }
        return 0;
    }
}
exports.default = EC_EX2_034_2;
//# sourceMappingURL=EC_EX2_034_2.js.map