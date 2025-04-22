"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
class EC_BT7_073_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.AddBuff, null);
    }
    Con() {
        return this.parent.CheckOriginListWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10926, true);
        });
    }
    AddBuff() {
        this.CreateEffectTo(new EC_BT7_073_2_ADD(), this.parent, false);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_073_2;
class EC_BT7_073_2_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.SetMichizureEffect(effect);
    }
}
//# sourceMappingURL=EC_BT7_073_2.js.map