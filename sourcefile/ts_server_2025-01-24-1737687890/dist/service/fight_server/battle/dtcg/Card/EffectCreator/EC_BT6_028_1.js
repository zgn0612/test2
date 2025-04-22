"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceBaoLieEffectCreatorts_1 = require("../Effect/DtEnhanceBaoLieEffectCreatorts");
const DtGlobalBuff_ConditionAttribute_1 = require("../GlobalBuff/DtGlobalBuff_ConditionAttribute");
class EC_BT6_028_1 extends DtEnhanceBaoLieEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetEnBaolieEffect(effect, 2);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let buff = new DtGlobalBuff_ConditionAttribute_1.DtGlobalBuff_ConditionAttribute(this.parent, DtEnum_1.DtBuffType.CAN_NOT_BE_BLOCKER, this.BuffCon, this);
        buff.effectType = DtEnum_1.DtBuffEffectToType.Self;
        buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
    }
}
exports.default = EC_BT6_028_1;
//# sourceMappingURL=EC_BT6_028_1.js.map