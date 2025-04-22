"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_032_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect(effect) {
        let buffNoAtk = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, this.BuffCon, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Both);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buffNoAtk);
        let buffNoDef = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.CAN_NOT_DEF_BLOCK, this.BuffCon, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Both);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buffNoDef);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.GetOriginDigimonCount() == 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT5_032_2;
//# sourceMappingURL=EC_BT5_032_2.js.map