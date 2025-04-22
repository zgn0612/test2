"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_DiscardOriginCustom_ChooseIsOrigin = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_DiscardOriginCustom_ChooseIsOrigin extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    OnGetCardEvent;
    call;
    constructor(call, func) {
        super();
        this.OnGetCardEvent = func;
        this.call = call;
    }
    OnOperateCard(card, effect) {
        let getcard = null;
        if (this.OnGetCardEvent) {
            getcard = this.OnGetCardEvent.call(this.call, effect);
        }
        if (getcard) {
            effect.parent.parent.manager.OnCardDiscardEvoOriginCard(effect.parent, getcard, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
    }
    OpNextUsefulCard(card) {
        return card.GetOriginDigimonCount() > 0;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.DiscardOrigin;
        return desc;
    }
}
exports.DtCardOperate_DiscardOriginCustom_ChooseIsOrigin = DtCardOperate_DiscardOriginCustom_ChooseIsOrigin;
//# sourceMappingURL=DtCardOperate_DiscardOriginCustom_ChooseIsOrigin.js.map