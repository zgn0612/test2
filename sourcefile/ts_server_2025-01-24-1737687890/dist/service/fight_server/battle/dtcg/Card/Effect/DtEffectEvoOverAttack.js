"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("./DtEffectCreator");
class DtEffectEvoOverAttack extends DtEffectCreator_1.DtEffectCreator {
    list;
    CreateEvoOverAttack() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.EVO_ATTACK;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.OnOtherCondition);
        effect.SetEffect(this.Effect, this.Choose).SetSkillDesc(1, this.GetDesc1);
    }
    CreateTimeEvoOverAttack(dur, num) {
        let effect = this.CreateTimeEffectToCard(this.parent, dur, num);
        effect.name = DtEnum_1.EFFECT_NAME.EVO_ATTACK;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.OnOtherCondition);
        effect.SetEffect(this.Effect, this.Choose).SetSkillDesc(1, this.GetDesc1);
    }
    SetEvoOverAttackEffect(effect) {
        effect.SetEffect(this.Effect, this.Choose).SetSkillDesc(1, this.GetDesc1);
    }
    GetDesc1() {
        let skilldesc = new DtMessageData_1.DtSkillDesc();
        skilldesc.skill = new DtMessageData_1.DtSkillReasonDesc();
        skilldesc.skill.reason = DtEnum_1.DtSkillReason.EVO_ATTACK;
        return skilldesc;
    }
    OnOtherCondition(effect) {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return false;
        }
        if (this.GetPlayer().IsThisPlayerRound() && this.GetManager().CurCost >= 0) {
            return false;
        }
        return this.parent.CanAttack();
    }
    Effect(effect) {
        this.list = this.GetOppPlayer().areaInBattle.GetListWithCondition((card) => {
            return this.parent.CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, card, true);
        });
        if (this.list.length == 0) {
            if (this.parent.CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null, true)) {
                this.AttackDefense();
            }
            return DtEffect_1.DtEffectResult.Next;
        }
        else {
            if (this.parent.CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null, true)) {
                this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.Over_Attack, this.list, 1, effect, 1);
            }
            else {
                this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, effect, 2);
            }
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
    }
    Choose(uid) {
        if (uid == null || uid.toNumber() == 0) {
            if (this.parent.CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null, true)) {
                this.AttackDefense();
            }
        }
        else {
            let card = this.GetCardInList(this.list, uid);
            if (card) {
                this.GetManager().OnDigimonEffectBattle(this.GetPlayer(), this.parent, DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, card);
            }
        }
    }
    AttackDefense() {
        this.GetManager().OnDigimonEffectBattle(this.GetPlayer(), this.parent, DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null);
    }
}
exports.default = DtEffectEvoOverAttack;
//# sourceMappingURL=DtEffectEvoOverAttack.js.map