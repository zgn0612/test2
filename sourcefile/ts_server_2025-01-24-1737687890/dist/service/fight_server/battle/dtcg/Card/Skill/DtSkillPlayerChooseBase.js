"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillPlayerChoose = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtSkillBase_1 = require("./DtSkillBase");
const DtSkillCardFiterMachine_1 = require("./DtSkillCardFilter/DtSkillCardFiterMachine");
const DtSkillCardOperateMachine_1 = require("./DtSkillCardOperate/DtSkillCardOperateMachine");
class DtSkillPlayerChoose extends DtSkillBase_1.DtSkillBase {
    CallObj;
    constructor(effect, stage, callobj) {
        super(effect, stage);
        this.CallObj = callobj;
        this.SetFilteMachine(new DtSkillCardFiterMachine_1.DtSkillCardFiterMachine(this));
        this.SetOperateMachine(new DtSkillCardOperateMachine_1.DtSkillCardOperateMachine(this));
        this.mulNeedReverse = false;
    }
    list;
    PlayerChooseMachine;
    mulNeedReverse = false;
    CardFilterMachine;
    CardOperateMachine;
    Condition;
    OnSkillRun() {
        if (this.PlayerChooseMachine.IsActive() == false) {
            return DtEffect_1.DtEffectResult.Next;
        }
        let oplist = this.GetPlayerChooseCards();
        if (oplist != null) {
            let hasUsefulOp = false;
            for (let i = 0; i < oplist.length; i++) {
                if (oplist[i].isused == true) {
                    hasUsefulOp = true;
                    break;
                }
            }
            if (hasUsefulOp) {
                if (this.PlayerChooseMachine.OnSendPlayerChoose(oplist)) {
                    return DtEffect_1.DtEffectResult.WaitForChoose;
                }
            }
        }
        this.success = false;
        return DtEffect_1.DtEffectResult.Next;
    }
    OnPlayerChooseOne(uid) {
        let card = _Dcg_1.gFun.GetCardInList(this.list, uid);
        if (card) {
            if (this.CardOperateMachine) {
                this.CardOperateMachine.OnOperateCard(card, this.parentEffect);
            }
        }
        else {
            if (uid.toNumber() == 0) {
                this.success = false;
            }
        }
    }
    OnPlayerChooseMul(uids) {
        if (this.mulNeedReverse) {
            uids.reverse();
        }
        for (let i = 0; i < uids.length; i++) {
            let card = _Dcg_1.gFun.GetCardInList(this.list, uids[i]);
            if (card) {
                if (this.CardOperateMachine) {
                    this.CardOperateMachine.OnOperateCard(card, this.parentEffect);
                }
            }
        }
    }
    CheckSkillNeedChoose() {
        return true;
    }
    GetFunCallObj() {
        return this.CallObj;
    }
    SetChooseMachine(mcChoose) {
        this.PlayerChooseMachine = mcChoose;
    }
    GetChooseMachine() {
        return this.PlayerChooseMachine;
    }
    SetFilteMachine(mcFilter) {
        this.CardFilterMachine = mcFilter;
    }
    GetMachineFilter() {
        return this.CardFilterMachine;
    }
    SetFilter(filter) {
        this.CardFilterMachine.SetFilter(filter);
    }
    SetOperateMachine(mcOperate) {
        this.CardOperateMachine = mcOperate;
    }
    GetMachineOperate() {
        return this.CardOperateMachine;
    }
    SetOperate(op) {
        this.CardOperateMachine.SetOperate(op);
    }
    SetCondition(func) {
        this.Condition = func;
    }
    OpNextUsefulCard(card) {
        if (this.CardOperateMachine) {
            return this.CardOperateMachine.OpNextUsefulCard(card);
        }
    }
    GetPlayerChooseCards() {
        if (this.Condition) {
            let con = this.Condition.call(this.CallObj, this.parentEffect);
            if (con == false) {
                return null;
            }
        }
        if (this.CardFilterMachine != null) {
            this.list = this.CardFilterMachine.OnFiltercards();
        }
        else {
            return null;
        }
        if (this.list && this.list.length > 0 && this.CardOperateMachine != null) {
            if (this.PlayerChooseMachine) {
                return this.CardOperateMachine.ConvertChooseCards(this.list);
            }
        }
        return null;
    }
    CheckSkilliMakeSenese() {
        if (this.PlayerChooseMachine) {
            if (this.PlayerChooseMachine.IsActive() == false) {
                return false;
            }
        }
        let oplist = this.GetPlayerChooseCards();
        if (oplist != null) {
            let hasUsefulOp = false;
            for (let i = 0; i < oplist.length; i++) {
                if (oplist[i].isused == true) {
                    hasUsefulOp = true;
                    break;
                }
            }
            if (hasUsefulOp) {
                return true;
            }
        }
        return false;
    }
    GetSkillDesc() {
        let des = new DtMessageData_1.DtSkillDesc();
        des.indexStage = this.effectStage;
        if (this.GetChooseMachine().GetChooseType() == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
            if (this.CardFilterMachine.EffectToPlayer == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
                des.effectToPlayer = DtEnum_1.DtSkillTargetToPlayer.Self;
            }
            else if (this.CardFilterMachine.EffectToPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
                des.effectToPlayer = DtEnum_1.DtSkillTargetToPlayer.Opponent;
            }
            else {
                des.effectToPlayer = DtEnum_1.DtSkillTargetToPlayer.Both;
            }
        }
        else {
            des.effectToPlayer = this.CardFilterMachine.EffectToPlayer;
        }
        des.area = this.CardFilterMachine.EffectArea;
        des.compare = this.PlayerChooseMachine.GetCompare();
        des.count = this.PlayerChooseMachine.GetNum();
        des.cardTypes = this.CardFilterMachine.GetFilterCardTypes();
        des.skill = this.CardOperateMachine.GetReasonDesc();
        des.otherSkill = this.CardOperateMachine.GetOtherReasonDesc();
        return des;
    }
}
exports.DtSkillPlayerChoose = DtSkillPlayerChoose;
//# sourceMappingURL=DtSkillPlayerChooseBase.js.map