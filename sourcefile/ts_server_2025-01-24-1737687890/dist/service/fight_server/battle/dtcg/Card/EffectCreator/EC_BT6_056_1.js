"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerBattleOver_1 = require("../Effect/TriggerCondition/DtConTriggerBattleOver");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Degenerate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Degenerate");
class EC_BT6_056_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.TriggerBattleOver, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        let ctri = new DtConTriggerBattleOver_1.DtConTriggerBattleOver(DtEnum_1.DtEffectRoundValid.Both, DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, false);
        let tcard = ctri.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => { return card == this.parent; });
        tcard.SetArea(DtEnum_1.DtAreaType.WAIT);
        effect.SetTriggerCondition(ctri);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.WAIT);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_Degenerate_1.DtCardOperate_Degenerate(1));
    }
}
exports.default = EC_BT6_056_1;
//# sourceMappingURL=EC_BT6_056_1.js.map