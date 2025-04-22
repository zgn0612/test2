"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_022_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.parent.CheckOriginListWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10799, true);
        });
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.DISTURB).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_022_2;
//# sourceMappingURL=EC_BT7_022_2.js.map