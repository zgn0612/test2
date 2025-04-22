"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT2_088_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        let tevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetArea(DtEnum_1.DtAreaType.HAND);
        tevo.SetNameCon(DtCardDigimonType_1.DtCardDigimonType.name_type_10105, false);
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.E2Condition);
        effect.SetEffectActivateAsk();
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.E2Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    E2Condition(effect) {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    E2Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_088_2;
//# sourceMappingURL=EC_BT2_088_2.js.map