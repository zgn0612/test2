"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT7_088_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let buff = this.GetGlobalBuff_ChangeDP(this.BuffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.DEFENSE, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return 3000;
        }
        return 0;
    }
}
exports.default = EC_BT7_088_O_1;
//# sourceMappingURL=EC_BT7_088_O_1.js.map