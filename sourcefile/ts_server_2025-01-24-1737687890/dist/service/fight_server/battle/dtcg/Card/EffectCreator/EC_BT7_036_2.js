"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtGlobalBuff_ChangeDP_1 = require("../GlobalBuff/DtGlobalBuff_ChangeDP");
class EC_BT7_036_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.parent.CheckOriginListWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10834, true);
        });
    }
    Effect() {
        let buff = new DtGlobalBuff_ChangeDP_1.DtGlobalBuff_ChangeDP(this.parent, this);
        buff.dp = 3000;
        buff.effectType = DtEnum_1.DtBuffEffectToType.Self;
        buff.effectArea = DtEnum_1.DtAreaType.DEFENSE;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_036_2;
//# sourceMappingURL=EC_BT7_036_2.js.map