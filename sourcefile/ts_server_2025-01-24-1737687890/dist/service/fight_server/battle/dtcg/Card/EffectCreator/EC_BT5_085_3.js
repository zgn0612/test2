"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_085_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let buff = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.CAN_NOT_ACTIVATE_EVO_EFFECT, this.BuffCon, DtEnum_1.DtBuffEffectToType.Both, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Both);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 7)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT5_085_3;
//# sourceMappingURL=EC_BT5_085_3.js.map