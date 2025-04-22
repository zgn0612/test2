"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_SetOrigin_ChooseIsOrigin = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_SetOrigin_ChooseIsOrigin extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    where = 1;
    constructor(where) {
        super();
        this.where = where;
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardSetToEvo(effect.parent, effect.parent, card, this.where, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.AddToOrigin;
        return desc;
    }
}
exports.DtCardOperate_SetOrigin_ChooseIsOrigin = DtCardOperate_SetOrigin_ChooseIsOrigin;
//# sourceMappingURL=DtCardOperate_SetOrigin_ChooseIsOrigin.js.map