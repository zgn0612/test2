"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_DrawCardFromDefense = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_DrawCardFromDefense extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    type;
    constructor(t = DtMessageData_1.DtProtoEnum_MoveReason.CardEffect) {
        super();
        this.type = t;
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnDrawCardFromDefense(effect.parent, card.GetPlayer(), card, this.type);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.DrawCardFromDefense;
        return desc;
    }
}
exports.DtCardOperate_DrawCardFromDefense = DtCardOperate_DrawCardFromDefense;
//# sourceMappingURL=DtCardOperate_DrawCardFromDefense.js.map