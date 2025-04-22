"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreateGlobalTimeEffectToOther_1 = require("../Effect/DtEffectCreateGlobalTimeEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
class EC_EX1_068_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.CreateGlobalEffect(new EC_EX1_068_1_ADD_1());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_068_1;
class EC_EX1_068_1_ADD_1 extends DtEffectCreateGlobalTimeEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1, DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnCondition(card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
    }
    OnGetEffect() {
        return new EC_EX1_068_1_ADD_2();
    }
}
class EC_EX1_068_1_ADD_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1, false);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_EX1_068_1.js.map