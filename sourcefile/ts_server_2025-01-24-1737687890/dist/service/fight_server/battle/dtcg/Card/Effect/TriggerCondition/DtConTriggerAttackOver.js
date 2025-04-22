"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerAttackOver = void 0;
const DtFsmAttackEnum_1 = require("../../../Fsm/Attack/DtFsmAttackEnum");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerAttackOver extends DtConBase_1.DtConBase {
    round;
    atkType;
    conAtkCard;
    conDefCard;
    constructor(round, atkType) {
        super();
        this.round = round;
        this.atkType = atkType;
    }
    SetAtkCardCon(type, c, o) {
        this.conAtkCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conAtkCard;
    }
    SetDefCardCon(type, c, o) {
        this.conDefCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conDefCard;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
        }
        if (this.atkType != DtFsmAttackEnum_1.DtFsmAttackType.None) {
            if (this.atkType != msg.atkType) {
                return false;
            }
        }
        if (this.conAtkCard) {
            if (this.conAtkCard.CheckCondition(effect.parent.GetPlayer(), msg.atkCard) == false) {
                return false;
            }
        }
        if (this.conDefCard) {
            if (this.conDefCard.CheckCondition(effect.parent.GetPlayer(), msg.defCard) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerAttackOver = DtConTriggerAttackOver;
//# sourceMappingURL=DtConTriggerAttackOver.js.map