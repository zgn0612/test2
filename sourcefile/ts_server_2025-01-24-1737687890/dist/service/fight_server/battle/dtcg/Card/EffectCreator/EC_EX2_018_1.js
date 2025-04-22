"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_018_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetOriginDigimonCount() == 0;
        });
        if (count > 0) {
            let max = 5 - this.GetPlayer().areaDefense.CardCount();
            if (max > 0) {
                if (count > max) {
                    count = max;
                }
                this.GetManager().OnRestore(this.parent, this.GetPlayer(), count);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_018_1;
//# sourceMappingURL=EC_EX2_018_1.js.map