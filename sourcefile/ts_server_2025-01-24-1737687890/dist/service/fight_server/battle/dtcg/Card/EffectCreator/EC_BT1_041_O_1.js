"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT1_041_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        let hasNo = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.GetOriginDigimonCount() == 0) {
                    return true;
                }
            }
            return false;
        });
        return hasNo;
    }
    Effect(effect) {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_041_O_1;
//# sourceMappingURL=EC_BT1_041_O_1.js.map