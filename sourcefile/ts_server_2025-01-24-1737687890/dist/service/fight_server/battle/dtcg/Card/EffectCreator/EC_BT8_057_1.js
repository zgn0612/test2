"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_057_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let buff = this.GetGlobalPlayerBuff(DtEnum_1.DtBuffType.MAGIC_CARD_BE_PROHIBIT_USE, this.Con, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddPlayerBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    Con(sk, player) {
        let hasActive = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
        });
        return hasActive == false;
    }
}
exports.default = EC_BT8_057_1;
//# sourceMappingURL=EC_BT8_057_1.js.map