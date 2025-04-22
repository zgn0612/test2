"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalPlayerBuff = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalPlayerBuffBase_1 = require("./DtGlobalPlayerBuffBase");
class DtGlobalPlayerBuff extends DtGlobalPlayerBuffBase_1.DtGlobalPlayerBuffBase {
    func;
    constructor(caster, toPlayer, buff, func, creator) {
        super(caster, toPlayer, buff, creator);
        this.func = func;
    }
    PlayerCondition(player, buff) {
        if (buff != this.type) {
            return false;
        }
        if (this.effectType == DtEnum_1.DtBuffEffectToType.Self) {
            if (this.effectPlayer != player) {
                return false;
            }
        }
        else if (this.effectType == DtEnum_1.DtBuffEffectToType.Opponent) {
            if (this.effectPlayer == player) {
                return false;
            }
        }
        if (this.roundValid == DtEnum_1.DtEffectRoundValid.Self) {
            if (this.effectPlayer.IsThisPlayerRound() == false) {
                return false;
            }
        }
        else if (this.roundValid == DtEnum_1.DtEffectRoundValid.Opponent) {
            if (this.effectPlayer.IsThisPlayerRound()) {
                return false;
            }
        }
        if (this.effectCard != null) {
            if (this.effectCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                return false;
            }
        }
        if (this.func != null) {
            return this.func.call(this.creator, this, player);
        }
        return true;
    }
}
exports.DtGlobalPlayerBuff = DtGlobalPlayerBuff;
//# sourceMappingURL=DtGlobalPlayerBuff.js.map