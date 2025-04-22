"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_011_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let buff = this.GetGlobalPlayerBuffInt(DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP, this.Con, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtEffectRoundValid.Self);
        this.GetManager().globalBuffMgr.AddPlayerBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    Con(sk, player) {
        let hasRole = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role);
        });
        if (hasRole) {
            return 2000;
        }
        return 0;
    }
}
exports.default = EC_EX2_011_2;
//# sourceMappingURL=EC_EX2_011_2.js.map