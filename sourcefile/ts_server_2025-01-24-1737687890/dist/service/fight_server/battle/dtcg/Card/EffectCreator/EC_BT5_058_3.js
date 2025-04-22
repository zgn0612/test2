"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_058_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let gbuff = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE, this.BuffCon, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Both);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(gbuff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT5_058_3;
//# sourceMappingURL=EC_BT5_058_3.js.map