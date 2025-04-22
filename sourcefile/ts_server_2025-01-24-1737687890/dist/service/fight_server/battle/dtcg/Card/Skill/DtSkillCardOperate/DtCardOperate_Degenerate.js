"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_Degenerate = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_Degenerate extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    deNum;
    constructor(deNum) {
        super();
        this.deNum = deNum;
    }
    DegCallBack;
    OnOperateCard(card, effect) {
        let eff = card.parent.manager.OnCardDegenerate(effect.parent, card, this.deNum);
        eff.DegCallBack = (card) => {
            if (this.DegCallBack) {
                this.DegCallBack(card);
            }
        };
    }
    IsUsefulCard(card) {
        return card.CanDegenerate(this.deNum) > 0;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.Degenerate;
        desc.num = this.deNum;
        return desc;
    }
}
exports.DtCardOperate_Degenerate = DtCardOperate_Degenerate;
//# sourceMappingURL=DtCardOperate_Degenerate.js.map