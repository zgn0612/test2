"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerRoundStart_1 = require("../Effect/TriggerCondition/DtConTriggerRoundStart");
class EC_BT6_090_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundStart);
        effect.SetTriggerCondition(new DtConTriggerRoundStart_1.DtConTriggerRoundStart(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        }) >= 2;
    }
    Effect() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_090_1;
//# sourceMappingURL=EC_BT6_090_1.js.map