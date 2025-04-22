"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtGlobalBuff_ChangePower_1 = require("../GlobalBuff/DtGlobalBuff_ChangePower");
class EC_BT4_098_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let e2 = this.GetNewEffect();
        e2.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        e2.SetEffect(this.Effect, null);
    }
    Effect() {
        let buff = new DtGlobalBuff_ChangePower_1.DtGlobalBuff_ChangePower(this.parent, this);
        buff.power = 1;
        buff.effectType = DtEnum_1.DtBuffEffectToType.Self;
        buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverSelf, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_098_2;
//# sourceMappingURL=EC_BT4_098_2.js.map