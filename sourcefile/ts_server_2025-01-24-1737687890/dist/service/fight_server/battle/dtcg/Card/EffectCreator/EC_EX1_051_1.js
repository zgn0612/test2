"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardEvolution");
class EC_EX1_051_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardEvolution);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let coni = new DtConTriggerCardEvolution_1.DtConTriggerCardEvolution(DtEnum_1.DtEffectRoundValid.Opponent);
        let concard = coni.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        concard.SetLv(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 5);
        effect.SetTriggerCondition(coni);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_051_1;
//# sourceMappingURL=EC_EX1_051_1.js.map