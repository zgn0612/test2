"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX2_038_2 extends DtEffectCreator_1.DtEffectCreator {
    activeTime = 0;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        let c = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role);
        });
        this.activeTime = c;
        return c > 0;
    }
    Effect(effect) {
        let evoEffect = this.parent.GetFirstEffectWithTrigtgerType(DtEffectType_1.DtEffectType.OnEvolution);
        if (evoEffect) {
            effect.UseOtherEffect(evoEffect);
        }
        this.activeTime--;
        if (this.activeTime > 0) {
            effect.ReturnToThePreviousStep();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_038_2;
//# sourceMappingURL=EC_EX2_038_2.js.map