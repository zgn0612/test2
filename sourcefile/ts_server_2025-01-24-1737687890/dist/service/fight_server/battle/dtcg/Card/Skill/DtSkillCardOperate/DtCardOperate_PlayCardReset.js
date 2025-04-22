"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_PlayCardReset = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_PlayCardReset extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
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
            fsm.stateActiveToBattle = false;
        }
        else {
            this.parentSkill.success = false;
        }
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.EffectPlayCard;
        return desc;
    }
}
exports.DtCardOperate_PlayCardReset = DtCardOperate_PlayCardReset;
//# sourceMappingURL=DtCardOperate_PlayCardReset.js.map