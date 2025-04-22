"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillCardOperateMachine = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtPlayerChooseBase_1 = require("../DtSkillPlayerChoose/DtPlayerChooseBase");
class DtSkillCardOperateMachine {
    parent;
    constructor(parent) {
        this.parent = parent;
        this.cardOperates = new Array();
    }
    cardOperates;
    OnOperateCard(card, effect) {
        if (this.cardOperates != null && this.cardOperates.length > 0) {
            for (let i = 0; i < this.cardOperates.length; i++) {
                this.cardOperates[i].OnOperateCard(card, effect);
            }
        }
    }
    SetOperate(op) {
        op.parentSkill = this.parent;
        this.cardOperates.push(op);
    }
    ConvertChooseCards(cards) {
        let result = new Array();
        for (let i = 0; i < cards.length; i++) {
            result.push(new DtPlayerChooseBase_1.DtPlayerChooseCardInfo(cards[i], this.GetCardIseUseful(cards[i])));
        }
        return result;
    }
    GetCardIseUseful(card) {
        if (this.cardOperates != null && this.cardOperates.length > 0) {
            for (let i = 0; i < this.cardOperates.length; i++) {
                if (this.cardOperates[i].IsUsefulCard(card)) {
                    return true;
                }
            }
        }
        return false;
    }
    OpNextUsefulCard(card) {
        if (this.cardOperates != null && this.cardOperates.length > 0) {
            for (let i = 0; i < this.cardOperates.length; i++) {
                if (this.cardOperates[i].OpNextUsefulCard(card)) {
                    return true;
                }
            }
        }
        return false;
    }
    IsNextStepOp() {
        if (this.cardOperates != null && this.cardOperates.length == 1) {
            let op = this.cardOperates[0];
            if (op && op.constructor.name == "DtCardOperate_SpecialOperate") {
                return op.ISNextStepTyoe();
            }
        }
        return false;
    }
    HasDestroyEffect() {
        if (this.cardOperates) {
            for (let i = 0; i < this.cardOperates.length; i++) {
                if (this.cardOperates[i].reason == DtEnum_1.DtSkillReason.Destory) {
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
    GetOtherReasonDesc() {
        if (this.cardOperates && this.cardOperates.length > 1) {
            let arr = new Array();
            for (let i = 1; i < this.cardOperates.length; i++) {
                let desc = this.cardOperates[i].GetReasonDesc();
                if (desc) {
                    arr.push(desc);
                }
            }
            if (arr.length > 0) {
                return arr;
            }
        }
        return null;
    }
}
exports.DtSkillCardOperateMachine = DtSkillCardOperateMachine;
//# sourceMappingURL=DtSkillCardOperateMachine.js.map