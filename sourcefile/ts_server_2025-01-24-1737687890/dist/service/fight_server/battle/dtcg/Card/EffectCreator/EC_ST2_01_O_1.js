"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerBattleOver_1 = require("../Effect/TriggerCondition/DtConTriggerBattleOver");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
class EC_ST2_01_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBeforeAtkJudge);
        let tricon = new DtConTriggerBattleOver_1.DtConTriggerBattleOver(DtEnum_1.DtEffectRoundValid.Self, DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, true);
        let atkCon = tricon.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        atkCon.SetCondition(this, (card) => { return card == this.parent; });
        let defcon = tricon.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        defcon.SetCondition(this, (card) => { return card.GetOriginDigimonCount() == 0; });
        effect.SetTriggerCondition(tricon);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect(eff) {
        eff.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(1000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.AfterAtkJudge), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST2_01_O_1;
//# sourceMappingURL=EC_ST2_01_O_1.js.map