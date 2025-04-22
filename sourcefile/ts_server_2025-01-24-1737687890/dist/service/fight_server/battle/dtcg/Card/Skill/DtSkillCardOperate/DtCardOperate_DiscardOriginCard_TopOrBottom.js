"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_DiscardOriginCard_TopOrBottom = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_DiscardOriginCard_TopOrBottom extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    where = 0;
    count = 1;
    constructor(where, count = 1) {
        super();
        this.where = where;
        this.count = count;
    }
    OnOperateCard(card, effect) {
        if (this.count == 1) {
            let success = effect.parent.parent.manager.OnCardDiscardEvoOriginWhere(effect.parent, card, this.where, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            if (success == false) {
                this.parentSkill.success = false;
            }
        }
        else {
            let oris = card.GetOriginDigimonList();
            let tc = this.count;
            if (this.count > oris.length) {
                tc = oris.length;
            }
            if (this.where == 0) {
                for (let i = 0; i < tc; i++) {
                    effect.parent.parent.manager.OnCardDiscardEvoOriginCard(effect.parent, card, oris[oris.length - 1 - i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
            }
            else {
                for (let i = 0; i < tc; i++) {
                    effect.parent.parent.manager.OnCardDiscardEvoOriginCard(effect.parent, card, oris[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
            }
        }
    }
    IsUsefulCard(card) {
        return card.GetOriginDigimonCount() > 0;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.DiscardOriginTopOrBottom;
        desc.type = this.where;
        desc.num = this.count;
        return desc;
    }
}
exports.DtCardOperate_DiscardOriginCard_TopOrBottom = DtCardOperate_DiscardOriginCard_TopOrBottom;
//# sourceMappingURL=DtCardOperate_DiscardOriginCard_TopOrBottom.js.map