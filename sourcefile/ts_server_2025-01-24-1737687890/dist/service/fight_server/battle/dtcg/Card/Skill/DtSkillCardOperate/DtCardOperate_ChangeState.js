"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_ChangeState = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_ChangeState extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    state;
    constructor(state) {
        super();
        this.state = state;
    }
    OnOperateCard(card, effect) {
        let action = null;
        if (this.state == DtEnum_1.DtCardBattleState.Activate) {
            action = effect.parent.parent.manager.OnSetCardActiveState(effect.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        else if (this.state == DtEnum_1.DtCardBattleState.Reset) {
            action = effect.parent.parent.manager.OnSetCardResetState(effect.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (action == null) {
            this.parentSkill.success = false;
        }
        else {
            action.SetEndCallBack((success) => {
                if (success == false) {
                    if (this.parentSkill) {
                        this.parentSkill.success = false;
                    }
                }
            });
        }
        return card;
    }
    IsUsefulCard(card) {
        return card.cardBattleState != this.state;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        if (this.state == DtEnum_1.DtCardBattleState.Activate) {
            desc.reason = DtEnum_1.DtSkillReason.ToStateActive;
        }
        else {
            desc.reason = DtEnum_1.DtSkillReason.ToStateReset;
        }
        return desc;
    }
}
exports.DtCardOperate_ChangeState = DtCardOperate_ChangeState;
//# sourceMappingURL=DtCardOperate_ChangeState.js.map