"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillPlayerBrowse = void 0;
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtSkillBase_1 = require("./DtSkillBase");
const DtPlayerChooseBase_1 = require("./DtSkillPlayerChoose/DtPlayerChooseBase");
class DtSkillPlayerBrowse extends DtSkillBase_1.DtSkillBase {
    isPlayerCancel = false;
    isExecute = true;
    Immediately = false;
    cancelInterruptNext = true;
    parent;
    hasOperate = false;
    constructor(effect, stage, parent) {
        super(effect, stage);
        this.parent = parent;
        this.cardFilters = new Array();
        this.cardOperates = new Array();
        this.Immediately = false;
        this.cancelInterruptNext = true;
    }
    needreverse = false;
    operateCard;
    PlayerChooseMachine;
    cardFilters;
    cardOperates;
    Reset() {
        this.operateCard = null;
        this.isPlayerCancel = false;
        this.hasOperate = false;
    }
    SetFilter(filter) {
        filter.parentCard = this.parent.parent.parent;
        filter.effect = this.parent.effect;
        this.cardFilters.push(filter);
    }
    SetOperate(op) {
        op.parentSkill = this;
        this.cardOperates.push(op);
    }
    SetChooseMachine(mcChoose) {
        this.PlayerChooseMachine = mcChoose;
    }
    GetChooseMachine() {
        return this.PlayerChooseMachine;
    }
    OnSkillRun() {
        if (this.isExecute && this.isPlayerCancel) {
            this.success = false;
            return DtEffect_1.DtEffectResult.Next;
        }
        if (this.PlayerChooseMachine == null) {
            this.parent.OnSKillPlayerChooseALL(this);
            return DtEffect_1.DtEffectResult.Next;
        }
        let oplist = this.GetPlayerChooseCards();
        if (oplist != null && oplist.length > 0) {
            if (this.PlayerChooseMachine.OnSendPlayerChoose(oplist)) {
                return DtEffect_1.DtEffectResult.WaitForChoose;
            }
        }
        this.success = false;
        return DtEffect_1.DtEffectResult.Next;
    }
    GetPlayerChooseCards() {
        let cards = this.parent.GetCards();
        if (cards == null || cards.length == 0) {
            return null;
        }
        let infos = this.parent.GetNewChooseCardsInfoWithMeetCheck(this);
        if (infos != null) {
            for (let i = 0; i < cards.length; i++) {
                if (this.ConditionCard(cards[i])) {
                    if (this.ArrayContaionCard(infos, cards[i]) == false) {
                        infos.push(new DtPlayerChooseBase_1.DtPlayerChooseCardInfo(cards[i], true));
                    }
                }
            }
        }
        return infos;
    }
    ArrayContaionCard(arr, card) {
        if (arr != null && arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].card == card) {
                    return true;
                }
            }
        }
        return false;
    }
    ConditionCard(card) {
        if (this.cardFilters && this.cardFilters.length > 0) {
            for (let i = 0; i < this.cardFilters.length; i++) {
                let isf = this.cardFilters[i].OnFilterCard(card);
                if (isf == false || isf == null) {
                    return false;
                }
            }
        }
        if (this.cardOperates && this.cardOperates.length > 0) {
            for (let i = 0; i < this.cardOperates.length; i++) {
                let isf = this.cardOperates[i].IsUsefulCard(card);
                if (isf == false || isf == null) {
                    return false;
                }
            }
        }
        return true;
    }
    OperateCard() {
        if (this.cardOperates != null && this.cardOperates.length > 0 && this.operateCard && this.operateCard.length > 0 && this.hasOperate == false) {
            for (let i = 0; i < this.cardOperates.length; i++) {
                for (let j = 0; j < this.operateCard.length; j++) {
                    let card = this.operateCard[j];
                    this.cardOperates[i].OnOperateCard(card, this.parentEffect);
                }
            }
            this.hasOperate = true;
        }
    }
    OnPlayerChooseOne(uid) {
        if (uid.toNumber() == 0) {
            this.success = false;
            if (this.cancelInterruptNext) {
                this.parent.DisableAllExecuteSkill();
            }
            return;
        }
        this.parent.OnSkillPlayerChooseOne(this, uid);
    }
    OnPlayerChooseMul(uids) {
        if (this.needreverse) {
            uids.reverse();
        }
        this.parent.OnSkillPlayerChooseMul(this, uids);
    }
    SetOperateCard(card) {
        if (this.operateCard == null) {
            this.operateCard = new Array();
        }
        this.operateCard.push(card);
        if (this.Immediately) {
            this.OperateCard();
        }
    }
    GetOpCards() {
        return this.operateCard;
    }
    IsNeedCheckCardIsBothMeet() {
        if (this.GetChooseMachine().GetCompare() == DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT && this.GetChooseMachine().GetNum() == 1 && this.isExecute) {
            if (this.cardOperates != null && this.cardOperates.length == 1) {
                if (this.cardOperates[0].constructor.name == "DtCardOperate_MoveTo_Hand") {
                    return true;
                }
            }
        }
        return false;
    }
    GetReasonDesc() {
        if (this.cardOperates && this.cardOperates.length > 0) {
            return this.cardOperates[0].GetReasonDesc();
        }
        return null;
    }
    GetSkillDesc() {
        let des = new DtMessageData_1.DtSkillDesc();
        des.indexStage = this.effectStage;
        if (this.PlayerChooseMachine) {
            des.compare = this.PlayerChooseMachine.GetCompare();
            des.count = this.PlayerChooseMachine.GetNum();
        }
        des.skill = this.GetReasonDesc();
        return des;
    }
}
exports.DtSkillPlayerBrowse = DtSkillPlayerBrowse;
//# sourceMappingURL=DtSkillPlayerBrowse.js.map