"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerWhenAttacking = void 0;
const DtFsmAttackEnum_1 = require("../../../Fsm/Attack/DtFsmAttackEnum");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerWhenAttacking extends DtConBase_1.DtConBase {
    round;
    atkCardCon;
    defCardCon;
    atkType;
    constructor(round) {
        super();
        this.round = round;
        this.atkType = DtFsmAttackEnum_1.DtFsmAttackType.None;
    }
    SetAtkType(type) {
        this.atkType = type;
    }
    SetAtkCardCon(type, c, o) {
        this.atkCardCon = new DtConCard_1.DtConCard(type, c, o);
        return this.atkCardCon;
    }
    SetDefCardCon(type, c, o) {
        this.defCardCon = new DtConCard_1.DtConCard(type, c, o);
        return this.defCardCon;
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
        if (this.atkCardCon) {
            if (this.atkCardCon.CheckCondition(effect.parent.GetPlayer(), msg.atkCard) == false) {
                return false;
            }
        }
        if (this.defCardCon) {
            if (this.defCardCon.CheckCondition(effect.parent.GetPlayer(), msg.defCard) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerWhenAttacking = DtConTriggerWhenAttacking;
//# sourceMappingURL=DtConTriggerWhenAttacking.js.map