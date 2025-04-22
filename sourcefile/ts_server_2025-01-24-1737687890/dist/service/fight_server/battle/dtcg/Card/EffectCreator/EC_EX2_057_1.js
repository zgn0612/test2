"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalBuff_ConditionInt_1 = require("../GlobalBuff/DtGlobalBuff_ConditionInt");
class EC_EX2_057_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect(effect) {
        let buff = this.GetGlobalBuff_ChangeCost(this.buffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.HAND, DtEnum_1.DtEffectRoundValid.Self);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    buffCon(buff, card) {
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10966)) {
            return -1;
        }
        return 0;
    }
    GetGlobalBuff_ChangeCost(func, effectToType, toArea, roundValid) {
        let buff = new DtGlobalBuff_ConditionInt_1.DtGlobalBuff_ConditionInt(this.parent, DtEnum_1.DtBuffType.CHANGE_COST, func, this);
        buff.effectType = effectToType;
        buff.effectArea = toArea;
        buff.effectCard = this.parent;
        buff.roundValid = roundValid;
        return buff;
    }
}
exports.default = EC_EX2_057_1;
//# sourceMappingURL=EC_EX2_057_1.js.map