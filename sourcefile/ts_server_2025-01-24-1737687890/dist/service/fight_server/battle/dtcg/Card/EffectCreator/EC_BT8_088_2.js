"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardEvolution");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT8_088_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.TriggerCardEvolution);
        let con = new DtConTriggerCardEvolution_1.DtConTriggerCardEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let card = con.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        card.SetColorCount(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 2);
        effect.SetTriggerCondition(con);
        effect.SetCondition(this.Con);
        effect.SetEffectActivateAsk();
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Con() {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        this.GetManager().OnSetCardActiveState(this.parent, msg.evoCard, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_088_2;
//# sourceMappingURL=EC_BT8_088_2.js.map