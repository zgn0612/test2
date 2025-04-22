"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerRoundStart_1 = require("../Effect/TriggerCondition/DtConTriggerRoundStart");
class EC_ST2_12_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundStart);
        effect.SetTriggerCondition(new DtConTriggerRoundStart_1.DtConTriggerRoundStart(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetCondition(this.Con1);
        effect.SetEffect(this.Effect1, null);
    }
    Con1() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.GetOriginDigimonCount() == 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        return count > 0;
    }
    Effect1() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST2_12_1;
//# sourceMappingURL=EC_ST2_12_1.js.map