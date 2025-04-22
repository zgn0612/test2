"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtConst_1 = require("../../Data/DtConst");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_ST6_14_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        let ctri = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Self, ...DtConst_1.DtConst.ACTION_DESTORY);
        ctri.SetReceiveCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Condition);
        effect.SetEffectActivateAsk();
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Condition(effect) {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST6_14_1;
//# sourceMappingURL=EC_ST6_14_1.js.map