"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_SetOriginCustom_ChooseIsParent = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_SetOriginCustom_ChooseIsParent extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    OnGetCardEvent;
    call;
    where = 1;
    constructor(where, call, func) {
        super();
        this.where = where;
        this.OnGetCardEvent = func;
        this.call = call;
    }
    OnOperateCard(card, effect) {
        let getcard = null;
        if (this.OnGetCardEvent) {
            getcard = this.OnGetCardEvent.call(this.call);
        }
        if (getcard) {
            effect.parent.parent.manager.OnCardSetToEvo(effect.parent, card, getcard, this.where, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.AddToOrigin;
        return desc;
    }
}
exports.DtCardOperate_SetOriginCustom_ChooseIsParent = DtCardOperate_SetOriginCustom_ChooseIsParent;
//# sourceMappingURL=DtCardOperate_SetOriginCustom_ChooseIsParent.js.map