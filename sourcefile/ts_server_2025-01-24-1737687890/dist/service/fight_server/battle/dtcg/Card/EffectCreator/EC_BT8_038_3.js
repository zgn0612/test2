"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT8_038_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        let count = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_506);
        });
        if (count > 0) {
            effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(count * 2000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_038_3;
//# sourceMappingURL=EC_BT8_038_3.js.map