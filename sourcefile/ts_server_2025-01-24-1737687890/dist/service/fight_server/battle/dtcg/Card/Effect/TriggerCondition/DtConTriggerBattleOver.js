"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerBattleOver = void 0;
const DtFsmAttackEnum_1 = require("../../../Fsm/Attack/DtFsmAttackEnum");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerBattleOver extends DtConBase_1.DtConBase {
    round;
    needCheckSelf;
    atkType;
    conAtkCard;
    conDefCard;
    constructor(round, atkType, needCheckSelf) {
        super();
        this.round = round;
        this.atkType = atkType;
        this.needCheckSelf = needCheckSelf;
    }
    SetAtkCardCon(type, c, o) {
        this.conAtkCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conAtkCard;
    }
    SetDefCardCon(type, c, o) {
        this.conDefCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conDefCard;
    }
    GetDefCon() {
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
        let atkcard = msg.atkCard;
        let defcard = msg.defCard;
        if (this.needCheckSelf) {
            if (atkcard.GetPlayer() != effect.GetPlayer()) {
                atkcard = msg.defCard;
                defcard = msg.atkCard;
            }
        }
        if (this.conAtkCard) {
            if (this.conAtkCard.CheckCondition(effect.parent.GetPlayer(), atkcard) == false) {
                return false;
            }
        }
        if (this.conDefCard) {
            if (this.conDefCard.CheckCondition(effect.parent.GetPlayer(), defcard) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerBattleOver = DtConTriggerBattleOver;
//# sourceMappingURL=DtConTriggerBattleOver.js.map