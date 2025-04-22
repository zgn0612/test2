"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT6_054_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_Mul(DtEffectType_1.DtEffectType.TriggerWhenOppAttacking, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, 2);
        let ctri = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Opponent);
        ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        effect.SetTriggerCondition(ctri);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, card => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER) == false;
        }));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
}
exports.default = EC_BT6_054_1;
//# sourceMappingURL=EC_BT6_054_1.js.map