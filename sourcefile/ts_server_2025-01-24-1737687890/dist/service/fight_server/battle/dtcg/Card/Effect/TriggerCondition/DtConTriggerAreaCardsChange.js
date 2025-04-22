"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerAreaCardsChange = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtConBase_1 = require("./DtConBase");
class DtConTriggerAreaCardsChange extends DtConBase_1.DtConBase {
    round;
    playPlayer;
    area;
    isPush;
    func;
    funcObj;
    constructor(round, playCardPlayer, area, ispush) {
        super();
        this.round = round;
        this.playPlayer = playCardPlayer;
        this.isPush = ispush;
        this.area = area;
    }
    SetCondition(obj, func) {
        this.funcObj = obj;
        this.func = func;
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
        if (this.playPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
            if (msg.card.GetPlayer() != effect.parent.GetPlayer()) {
                return false;
            }
        }
        else if (this.playPlayer == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
            if (msg.card.GetPlayer() == effect.parent.GetPlayer()) {
                return false;
            }
        }
        if (this.area != DtEnum_1.DtAreaType.None) {
            if (this.area != msg.area) {
                return false;
            }
        }
        if (this.isPush != msg.isPush) {
            return false;
        }
        if (this.func) {
            return this.func.call(this.funcObj, msg);
        }
        return true;
    }
}
exports.DtConTriggerAreaCardsChange = DtConTriggerAreaCardsChange;
//# sourceMappingURL=DtConTriggerAreaCardsChange.js.map