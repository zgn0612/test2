"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_PlayCard_FromCustomOrigin = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_PlayCard_FromCustomOrigin extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    useCost = false;
    OnEffect = false;
    OnGetCardEvent;
    call;
    constructor(useCost, oneff, call, GetCustomParent) {
        super();
        this.useCost = useCost;
        this.OnEffect = oneff;
        this.OnGetCardEvent = GetCustomParent;
        this.call = call;
    }
    OnOperateCard(card, effect) {
        let getcard = null;
        if (this.OnGetCardEvent) {
            getcard = this.OnGetCardEvent.call(this.call);
        }
        if (getcard) {
            let fsm = effect.parent.parent.manager.OnCardPlayFromOrigin(effect.parent, getcard, card, this.useCost, this.OnEffect);
            if (fsm != null) {
            }
            else {
                this.parentSkill.success = false;
            }
        }
        else {
            this.parentSkill.success = false;
        }
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.EffectPlayCard_fromorigin;
        return desc;
    }
}
exports.DtCardOperate_PlayCard_FromCustomOrigin = DtCardOperate_PlayCard_FromCustomOrigin;
//# sourceMappingURL=DtCardOperate_PlayCard_FromCustomOrigin.js.map