"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerAreaCardsChange_1 = require("../Effect/TriggerCondition/DtConTriggerAreaCardsChange");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT8_090_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAreaCardsChange);
        effect.SetTriggerCondition(new DtConTriggerAreaCardsChange_1.DtConTriggerAreaCardsChange(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.DEFENSE, true));
        effect.SetCondition(this.Con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        effect.SetEffectActivateAsk();
    }
    Con() {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_090_2;
//# sourceMappingURL=EC_BT8_090_2.js.map