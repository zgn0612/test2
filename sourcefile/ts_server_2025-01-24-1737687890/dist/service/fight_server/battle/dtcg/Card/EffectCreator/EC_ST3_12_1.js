"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
class EC_ST3_12_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffectDirect();
    }
    Effect1() {
        let buff = this.GetGlobalBuff_ChangeDP(this.BuffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.DEFENSE, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return 2000;
        }
    }
}
exports.default = EC_ST3_12_1;
//# sourceMappingURL=EC_ST3_12_1.js.map