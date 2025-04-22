"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_PlayCard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_PlayCard extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    useCost = false;
    OnEffect = false;
    constructor(useCost, oneff) {
        super();
        this.useCost = useCost;
        this.OnEffect = oneff;
    }
    OnOperateCard(card, effect) {
        let fsm = effect.parent.parent.manager.OnUseCard(effect.parent, card.parent, card, this.useCost, this.OnEffect);
        if (fsm != null) {
        }
        else {
            this.parentSkill.success = false;
        }
    }
    IsUsefulCard(card) {
        if (card.parent.roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_EFFECT_PLAY_MONSTER) && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return false;
        }
        return true;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.EffectPlayCard;
        return desc;
    }
}
exports.DtCardOperate_PlayCard = DtCardOperate_PlayCard;
//# sourceMappingURL=DtCardOperate_PlayCard.js.map