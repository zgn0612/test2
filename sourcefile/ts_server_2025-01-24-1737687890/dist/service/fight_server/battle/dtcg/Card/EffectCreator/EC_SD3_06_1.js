"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerMainPhaseStart_1 = require("../Effect/TriggerCondition/DtConTriggerMainPhaseStart");
class EC_SD3_06_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerMainPhaseStart);
        effect.SetTriggerCondition(new DtConTriggerMainPhaseStart_1.DtConTriggerMainPhaseStart(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER);
        });
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_SD3_06_1;
//# sourceMappingURL=EC_SD3_06_1.js.map