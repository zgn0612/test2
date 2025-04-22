"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEventMsg_1 = require("../../Data/DtEventMsg");
const DtEvent_1 = require("../../DtEvent");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtConTriggerCardBeforeEvolution_1 = require("./TriggerCondition/DtConTriggerCardBeforeEvolution");
class DtAbsorbEvoEffectCreator extends DtEffectCreator_1.DtEffectCreator {
    list;
    changeCost = 0;
    CreateAbsorbEffect(cost) {
        this.changeCost = cost;
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.ABSORB;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Both);
        let tevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetArea(DtEnum_1.DtAreaType.HAND);
        tevo.SetCondition(this, (card) => { return card == this.parent; });
        effect.SetTriggerCondition(ctri);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.AbsorbEvoCondition);
        effect.SetEffect(this.BeforeAbsorb, null);
        effect.SetEffect(this.AbsorbEffect, this.AbsorbChoose).SetSkillDesc(1, this.GetDesc1);
    }
    GetDesc1() {
        let skilldesc = new DtMessageData_1.DtSkillDesc();
        skilldesc.compare = DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT;
        skilldesc.count = 1;
        skilldesc.cardTypes = [DtEnum_1.DtCardType.Monster];
        skilldesc.skill = new DtMessageData_1.DtSkillReasonDesc();
        skilldesc.skill.reason = DtEnum_1.DtSkillReason.ToStateReset;
        return skilldesc;
    }
    AbsorbEvoCondition(effect) {
        let msg = effect.eventMsg;
        if (msg.evoCard != this.parent) {
            return false;
        }
        let hasBeforeEff = this.GetManager().CheckInBattleHasEffectCanActivate(DtEffectType_1.DtEffectType.TriggerBeforeAbsorbEffectActive, this.GetPlayer(), DtEnum_1.DtAreaType.BATTLE_AREA, new DtEventMsg_1.DtMsg_CommonCardInfo(this.parent));
        if (hasBeforeEff) {
            return true;
        }
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
        });
    }
    BeforeAbsorb() {
        this.GetManager().FireListener(DtEvent_1.DtEventType.BrforeAbsorbEffect, new DtEventMsg_1.DtMsg_CommonCardInfo(this.parent));
        return DtEffect_1.DtEffectResult.Next;
    }
    AbsorbEffect(effect) {
        if (this.list == null) {
            this.list = new Array();
        }
        this.list.length = 0;
        if (this.parent.HasBuff(DtEnum_1.DtBuffType.ABSORB_CAN_SELECT_OPPENT)) {
            this.list = this.list.concat(this.parent.parent.GetOppPlayer().areaInBattle.GetListWithCondition((card) => {
                return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
            }));
        }
        this.list = this.list.concat(this.parent.parent.areaInBattle.GetListWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
        }));
        if (this.list.length > 0) {
            this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, effect, 1);
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    AbsorbChoose(uid) {
        let card = this.GetCardInList(this.list, uid);
        if (card) {
            this.GetManager().OnSetCardResetState(this.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.GetManager().GetCurrentFsmEvo().SetChangeCost(this.changeCost);
        }
    }
}
exports.default = DtAbsorbEvoEffectCreator;
//# sourceMappingURL=DtAbsorbEvoEffectCreator.js.map