"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalBuff_ConditionAttribute_1 = require("../GlobalBuff/DtGlobalBuff_ConditionAttribute");
class EC_BT1_113_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e3 = this.GetNewEffect();
        e3.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        e3.SetEffect(this.E3Effect, null);
    }
    E3Effect() {
        let buff = new DtGlobalBuff_ConditionAttribute_1.DtGlobalBuff_ConditionAttribute(this.parent, DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE, this.BuffCon, this);
        buff.effectType = DtEnum_1.DtBuffEffectToType.Opponent;
        buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.PhaseActiveOverOpponent, 2);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
    }
}
exports.default = EC_BT1_113_2;
//# sourceMappingURL=EC_BT1_113_2.js.map