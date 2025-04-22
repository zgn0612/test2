"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_ForceEvo_tobattleCard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_ForceEvo_tobattleCard extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    OnGetCardEvent;
    call;
    cost = 0;
    isNoCostEvo = false;
    constructor(cost, call, func, isNoCostEvo = false) {
        super();
        this.OnGetCardEvent = func;
        this.call = call;
        this.cost = cost;
        this.isNoCostEvo = isNoCostEvo;
    }
    OnOperateCard(card, effect) {
        let getcard = null;
        if (this.OnGetCardEvent) {
            getcard = this.OnGetCardEvent.call(this.call);
        }
        if (getcard) {
            let fsm = effect.parent.parent.manager.ForceDigimonEvo(effect.parent.GetPlayer(), card, getcard, this.cost);
            if (this.isNoCostEvo) {
                fsm.SetNoCost();
            }
        }
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.EffectEvoCard;
        return desc;
    }
}
exports.DtCardOperate_ForceEvo_tobattleCard = DtCardOperate_ForceEvo_tobattleCard;
//# sourceMappingURL=DtCardOperate_ForceEvo_tobattleCard.js.map