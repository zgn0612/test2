"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardDP = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardDP extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    type;
    dp;
    obj;
    initEvent;
    constructor(equalType, dp) {
        super();
        this.type = equalType;
        this.dp = dp;
    }
    SetInitEvent(obj, func) {
        this.obj = obj;
        this.initEvent = func;
        return this;
    }
    SetDp(dp) {
        this.dp = dp;
    }
    OnFilterCard(card) {
        if (this.initEvent) {
            this.initEvent.call(this.obj, this);
        }
        let result = false;
        switch (this.type) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (card.GetLastDP() == this.dp) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (card.GetLastDP() > this.dp) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (card.GetLastDP() >= this.dp) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (card.GetLastDP() < this.dp + this.GetAddDP()) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (card.GetLastDP() <= this.dp + this.GetAddDP()) {
                    result = true;
                }
                break;
        }
        return result;
    }
    GetAddDP() {
        if (this.parentSkillPlayerChoose) {
            if (this.type == DtEnum_1.DtFilterCompare.LESS || this.type == DtEnum_1.DtFilterCompare.LESS_EQUAL) {
                let opMachine = this.parentSkillPlayerChoose.GetMachineOperate();
                if (opMachine.HasDestroyEffect()) {
                    let add = this.parentCard.parent.manager.globalBuffMgr.CheckPlayerBuffInt(this.parentCard.GetPlayer(), DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP, this.parentCard);
                    return add + this.parentCard.GetDestoryDPLim();
                }
            }
        }
        return 0;
    }
}
exports.DtCardFilter_CardDP = DtCardFilter_CardDP;
//# sourceMappingURL=DtCardFilter_CardDP.js.map