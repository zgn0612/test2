"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardActivateEffect = void 0;
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerCardActivateEffect extends DtConBase_1.DtConBase {
    round;
    conCard;
    activeEffectName = 0;
    constructor(round, activeEffectName) {
        super();
        this.round = round;
        this.activeEffectName = activeEffectName;
    }
    SetCardCon(type, c, o) {
        this.conCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conCard;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
        }
        if (msg.card == null) {
            return false;
        }
        if (this.activeEffectName != 0) {
            if (this.activeEffectName != msg.effectname) {
                return false;
            }
        }
        if (this.conCard) {
            if (this.conCard.CheckCondition(effect.parent.GetPlayer(), msg.card) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerCardActivateEffect = DtConTriggerCardActivateEffect;
//# sourceMappingURL=DtConTriggerCardActivateEffect.js.map