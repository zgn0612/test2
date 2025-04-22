"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_016_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnBeBlocker);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        let count = this.parent.CheckOriginCountWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
        });
        this.ThisCardUseCost(-count);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_016_2;
//# sourceMappingURL=EC_BT7_016_2.js.map