"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEnum_1 = require("../../Data/DtEnum");
class DtRoundOverFusionEffectCreator extends DtEffectCreator_1.DtEffectCreator {
    list;
    fusionCardCreator;
    SetRoundOverEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundOver);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, this.Choose).SetSkillDesc(1, this.GetDescHand);
        effect.SetEffect(this.EffectSelectOther, this.ChooseFusion).SetSkillDesc(2, this.GetDescFusion);
        effect.SetEffect(this.SortEff, this.SortChoose).SetSkillDesc(3, this.GetDescFusionSort);
    }
    GetDescHand() {
        let skilldesc = new DtMessageData_1.DtSkillDesc();
        skilldesc.compare = DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT;
        skilldesc.effectToPlayer = DtEnum_1.DtSkillTargetToPlayer.Self;
        skilldesc.area = [DtEnum_1.DtAreaType.HAND];
        skilldesc.count = 1;
        skilldesc.cardTypes = [DtEnum_1.DtCardType.Monster];
        skilldesc.skill = new DtMessageData_1.DtSkillReasonDesc();
        skilldesc.skill.reason = DtEnum_1.DtSkillReason.Fusion;
        return skilldesc;
    }
    GetDescFusion() {
        let skilldesc = new DtMessageData_1.DtSkillDesc();
        skilldesc.compare = DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT;
        skilldesc.effectToPlayer = DtEnum_1.DtSkillTargetToPlayer.Self;
        skilldesc.area = [DtEnum_1.DtAreaType.BATTLE_AREA];
        skilldesc.count = 1;
        skilldesc.cardTypes = [DtEnum_1.DtCardType.Monster];
        skilldesc.skill = new DtMessageData_1.DtSkillReasonDesc();
        skilldesc.skill.reason = DtEnum_1.DtSkillReason.Fusion;
        return skilldesc;
    }
    GetDescFusionSort() {
        let skilldesc = new DtMessageData_1.DtSkillDesc();
        skilldesc.skill = new DtMessageData_1.DtSkillReasonDesc();
        skilldesc.skill.reason = DtEnum_1.DtSkillReason.FusionSort;
        return skilldesc;
    }
    Condition(effect) {
        let msg = effect.eventMsg;
        if (this.parent.parent.PlayerIdEquals(msg.playerId) == false) {
            return false;
        }
        this.fusionCardCreator = null;
        let cards = this.GetPlayer().areaHand.GetTheCopyCards();
        this.list = this.GetListWithCondition(cards, (card) => {
            let effect = card.GetFusionEffect();
            if (effect != null) {
                let fusionCreate = effect.GetCreateor();
                if (fusionCreate.CheckMaterialContaion(this.parent)) {
                    return true;
                }
            }
            return false;
        });
        return this.list.length > 0;
    }
    Effect(effect) {
        this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, effect, 1);
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    Choose(uid, effect) {
        let card = this.GetCardInList(this.list, uid);
        if (card) {
            this.fusionCardCreator = card.GetFusionEffect().GetCreateor();
        }
        else {
            effect.ForceOver();
        }
    }
    EffectSelectOther(effect) {
        this.list = this.fusionCardCreator.GetOtherMaterialCards(this.parent);
        if (this.list.length > 0) {
            this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, effect, 2);
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
        else {
            effect.ForceOver();
            return DtEffect_1.DtEffectResult.Next;
        }
    }
    ChooseFusion(uid, eff) {
        let card = this.GetCardInList(this.list, uid);
        if (card == null) {
            eff.ForceOver();
            return;
        }
        let cardIsBoth = this.fusionCardCreator.CheckTopCardCondition(this.parent) && this.fusionCardCreator.CheckBottomCardCondition(this.parent);
        let chooseIsBoth = this.fusionCardCreator.CheckTopCardCondition(card) && this.fusionCardCreator.CheckBottomCardCondition(card);
        if (cardIsBoth && chooseIsBoth) {
            this.list.length = 0;
            this.list.push(this.parent);
            this.list.push(card);
        }
        else {
            if (this.fusionCardCreator.CheckTopCardCondition(this.parent) && this.fusionCardCreator.CheckBottomCardCondition(card)) {
                this.parent.parent.manager.FusionEvolution(this.GetPlayer(), this.fusionCardCreator.parent, this.parent, card, this.fusionCardCreator.GetFusionCost());
            }
            else {
                this.parent.parent.manager.FusionEvolution(this.GetPlayer(), this.fusionCardCreator.parent, card, this.parent, this.fusionCardCreator.GetFusionCost());
            }
            eff.ForceOver();
        }
    }
    SortEff(effect) {
        if (this.list.length == 2) {
            this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.SORT, this.list, 1, effect, 3);
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    SortChoose(uid) {
        if (uid.length == 2) {
            let top = this.GetCardInList(this.list, uid[0]);
            let bottom = this.GetCardInList(this.list, uid[1]);
            if (top && bottom) {
                this.parent.parent.manager.FusionEvolution(this.GetPlayer(), this.fusionCardCreator.parent, top, bottom, this.fusionCardCreator.GetFusionCost());
            }
        }
    }
}
exports.default = DtRoundOverFusionEffectCreator;
//# sourceMappingURL=DtRoundOverFusionEffectCreator.js.map