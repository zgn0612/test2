"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerAttackOver_1 = require("../Effect/TriggerCondition/DtConTriggerAttackOver");
class EC_BT6_111_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAttackOver);
        let ctri = new DtConTriggerAttackOver_1.DtConTriggerAttackOver(DtEnum_1.DtEffectRoundValid.Self, DtFsmAttackEnum_1.DtFsmAttackType.None);
        let tcard = ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => { return card == this.parent; });
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_111_3;
//# sourceMappingURL=EC_BT6_111_3.js.map