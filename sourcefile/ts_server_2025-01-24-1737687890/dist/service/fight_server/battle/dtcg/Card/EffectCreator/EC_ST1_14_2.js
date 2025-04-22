"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalBuff_ChangeDP_1 = require("../GlobalBuff/DtGlobalBuff_ChangeDP");
class EC_ST1_14_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effdef = this.GetNewEffect();
        effdef.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effdef.SetEffect(this.EffectDef, null);
    }
    EffectDef(effect) {
        let buff = new DtGlobalBuff_ChangeDP_1.DtGlobalBuff_ChangeDP(this.parent, this);
        buff.dp = 7000;
        buff.effectType = DtEnum_1.DtBuffEffectToType.Self;
        buff.effectArea = DtEnum_1.DtAreaType.DEFENSE;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST1_14_2;
//# sourceMappingURL=EC_ST1_14_2.js.map