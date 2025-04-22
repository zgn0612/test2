"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalBuff_ChangeDP_1 = require("../GlobalBuff/DtGlobalBuff_ChangeDP");
class EC_ST3_13_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e2 = this.GetNewEffect();
        e2.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        e2.SetEffect(this.e2Eff, null);
    }
    e2Eff() {
        let buff = new DtGlobalBuff_ChangeDP_1.DtGlobalBuff_ChangeDP(this.parent, this);
        buff.dp = 5000;
        buff.effectType = DtEnum_1.DtBuffEffectToType.Self;
        buff.effectArea = DtEnum_1.DtAreaType.DEFENSE | DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST3_13_2;
//# sourceMappingURL=EC_ST3_13_2.js.map