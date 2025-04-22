"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerBattleOver_1 = require("../Effect/TriggerCondition/DtConTriggerBattleOver");
class EC_EX1_065_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        let ctri = new DtConTriggerBattleOver_1.DtConTriggerBattleOver(DtEnum_1.DtEffectRoundValid.Both, DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, false);
        let tcard = ctri.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => { return card == this.parent; });
        tcard.SetArea(DtEnum_1.DtAreaType.WAIT);
        effect.SetTriggerCondition(ctri);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.WAIT);
        effect.SetEffectActivateAsk();
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let card = this.GetPlayer().CreateTokenCard(116113);
        this.UseCard(card, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_065_1;
//# sourceMappingURL=EC_EX1_065_1.js.map