"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_DiscardOriginCard_BaoLie = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_DiscardOriginCard_BaoLie extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardDiscardEvoOriginCard(effect.parent, effect.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.BaolieDicard);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.DiscardOriginWToBaolie;
        return desc;
    }
}
exports.DtCardOperate_DiscardOriginCard_BaoLie = DtCardOperate_DiscardOriginCard_BaoLie;
//# sourceMappingURL=DtCardOperate_DiscardOriginCard_BaoLie.js.map