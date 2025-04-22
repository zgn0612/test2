"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT3_030_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffectDirect();
    }
    Effect1(effect) {
        let buff = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.DISTURB, this.BuffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Self);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardLvIs(DtEnum_1.DtFilterCompare.LESS_EQUAL, 4) && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT3_030_2;
//# sourceMappingURL=EC_BT3_030_2.js.map