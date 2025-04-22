"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardOnHatchPlay = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerCardOnHatchPlay extends DtConBase_1.DtConBase {
    round;
    phase;
    conCard;
    constructor(round, phase) {
        super();
        this.round = round;
        this.phase = phase;
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
        if (this.phase != DtEnum_1.DtBattlePhase.None) {
            if (effect.parent.GetPlayer().manager.GetCurrentPahse() != this.phase) {
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
exports.DtConTriggerCardOnHatchPlay = DtConTriggerCardOnHatchPlay;
//# sourceMappingURL=DtConTriggerCardOnHatchPlay.js.map