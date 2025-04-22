"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalBuff_ChangeDP_1 = require("../GlobalBuff/DtGlobalBuff_ChangeDP");
const DtEnhanceBaoLieEffectCreatorts_1 = require("../Effect/DtEnhanceBaoLieEffectCreatorts");
class EC_BT4_049_1 extends DtEnhanceBaoLieEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetEnBaolieEffect(effect, 3);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let buff = new DtGlobalBuff_ChangeDP_1.DtGlobalBuff_ChangeDP(this.parent, this);
        buff.dp = -4000;
        buff.effectType = DtEnum_1.DtBuffEffectToType.Opponent;
        buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_049_1;
//# sourceMappingURL=EC_BT4_049_1.js.map