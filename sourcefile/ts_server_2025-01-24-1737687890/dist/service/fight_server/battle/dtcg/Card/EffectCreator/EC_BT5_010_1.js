"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
class EC_BT5_010_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect1, null);
    }
    Condition() {
        return this.parent.CheckOriginListWithCondition((card) => {
            if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10000, true)) {
                return true;
            }
        });
    }
    Effect1() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_010_1;
//# sourceMappingURL=EC_BT5_010_1.js.map