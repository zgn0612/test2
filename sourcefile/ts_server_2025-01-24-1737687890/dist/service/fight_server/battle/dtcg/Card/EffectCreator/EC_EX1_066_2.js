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
class EC_EX1_066_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        effect.SetEffectActivateAsk();
        let ctri = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Both, ...DtConst_1.DtConst.ACTION_DESTORY);
        let ccard = ctri.SetReceiveCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccard.SetLv(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 5);
        ccard.SetCondition(this, (card) => {
            return card.GetOriginDigimonCount() > 0;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Condition);
        this.SetDirectSkill(effect, new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
        effect.SetEffect(this.Effect, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        effect.SetEffect(this.EffectHatch, null);
    }
    Condition(effect) {
        return this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
    }
    Effect() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectHatch() {
        this.GetManager().EffectHatchDigimon(this.GetPlayer());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_066_2;
//# sourceMappingURL=EC_EX1_066_2.js.map