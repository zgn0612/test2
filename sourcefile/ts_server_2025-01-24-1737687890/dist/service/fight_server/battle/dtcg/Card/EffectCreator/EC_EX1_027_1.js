"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerBattleOver_1 = require("../Effect/TriggerCondition/DtConTriggerBattleOver");
class EC_EX1_027_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.TriggerBattleOver);
        let ctri = new DtConTriggerBattleOver_1.DtConTriggerBattleOver(DtEnum_1.DtEffectRoundValid.Both, DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, false);
        let tcard = ctri.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => { return card == this.parent; });
        tcard.SetArea(DtEnum_1.DtAreaType.WAIT);
        effect.SetTriggerCondition(ctri);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.WAIT);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetPlayer().areaDefense.CardCount() <= 3;
    }
    Effect() {
        this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_027_1;
//# sourceMappingURL=EC_EX1_027_1.js.map