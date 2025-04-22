"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerMainPhaseStart_1 = require("../Effect/TriggerCondition/DtConTriggerMainPhaseStart");
class EC_EX2_063_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerMainPhaseStart);
        effect.SetTriggerCondition(new DtConTriggerMainPhaseStart_1.DtConTriggerMainPhaseStart(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_17) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_11)) {
                    return true;
                }
            }
            return false;
        });
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_063_1;
//# sourceMappingURL=EC_EX2_063_1.js.map