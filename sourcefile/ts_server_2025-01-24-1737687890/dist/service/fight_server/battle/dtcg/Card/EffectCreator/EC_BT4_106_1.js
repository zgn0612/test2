"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalBuff_ConditionInt_1 = require("../GlobalBuff/DtGlobalBuff_ConditionInt");
class EC_BT4_106_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let buff = new DtGlobalBuff_ConditionInt_1.DtGlobalBuff_ConditionInt(this.parent, DtEnum_1.DtBuffType.CHANGE_DP, this.BuffCon, this);
        buff.effectType = DtEnum_1.DtBuffEffectToType.Opponent;
        buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return -3000;
        }
        return 0;
    }
}
exports.default = EC_BT4_106_1;
//# sourceMappingURL=EC_BT4_106_1.js.map