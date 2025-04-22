"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_SeenForceEvo_toParent = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtBuffSpecialEvoCondition_1 = require("../../Buff/DtBuffSpecialEvoCondition");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_SeenForceEvo_toParent extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    color;
    lv;
    constructor(color, lv) {
        super();
        this.color = color;
        this.lv = lv;
    }
    OnOperateCard(card, effect) {
        let cost = 0;
        if (card.config.card_evo_condition != null) {
            for (let i = 0; i < card.config.card_evo_condition.length; i++) {
                if (card.config.card_evo_condition[i].color == this.color) {
                    if (this.lv == card.config.card_evo_condition[i].lv) {
                        cost = card.config.card_evo_condition[i].cost;
                    }
                }
            }
        }
        let fsmevo = effect.parent.parent.manager.ForceDigimonEvo(effect.parent.GetPlayer(), card, effect.parent, cost);
        let buff = new DtBuffSpecialEvoCondition_1.DtBuffSpecialEvoCondition(null, null, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false);
        buff.SetSeenData(DtEnum_1.DtCardType.Monster, this.color, this.lv);
        fsmevo.evoBuff = buff;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.EffectEvoCard;
        return desc;
    }
}
exports.DtCardOperate_SeenForceEvo_toParent = DtCardOperate_SeenForceEvo_toParent;
//# sourceMappingURL=DtCardOperate_SeenForceEvo_toParent.js.map