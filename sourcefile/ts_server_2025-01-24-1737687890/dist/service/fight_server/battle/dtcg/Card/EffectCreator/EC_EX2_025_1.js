"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
class EC_EX2_025_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let coni = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Role, DtEnum_1.DtSkillTargetToPlayer.Self);
        coni.SetPlayCardCon(DtEnum_1.DtCardType.Role, DtEnum_1.DtCardColor.Green, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(coni);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_025_1;
//# sourceMappingURL=EC_EX2_025_1.js.map