"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_ST9_11_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnEvolution, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            let msg = eff.eventMsg;
            if (msg.type == DtEnum_1.DtEvolutionType.Fusion) {
                eff.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE).SetBuffDurationType(DtEnum_1.DtBuffDurationType.PhaseActiveOverOpponent), card);
            }
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
}
exports.default = EC_ST9_11_2;
//# sourceMappingURL=EC_ST9_11_2.js.map