"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardEvolution");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT5_090_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardEvolution);
        effect.SetEffectActivateAsk();
        let ctri = new DtConTriggerCardEvolution_1.DtConTriggerCardEvolution(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        let tevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetNameCon(DtCardDigimonType_1.DtCardDigimonType.name_type_10012, true);
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.con);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    con(effect) {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect() {
        let card = this.GetPlayer().CreateTokenCard(116113);
        this.UseCard(card, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_090_2;
//# sourceMappingURL=EC_BT5_090_2.js.map