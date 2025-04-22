"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT8_087_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerWhenOppAttacking);
        let tricon = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Opponent);
        tricon.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        tricon.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Blue, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(tricon);
        effect.SetCondition(this.Con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        effect.SetEffectActivateAsk();
    }
    Con() {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect() {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_087_2;
//# sourceMappingURL=EC_BT8_087_2.js.map