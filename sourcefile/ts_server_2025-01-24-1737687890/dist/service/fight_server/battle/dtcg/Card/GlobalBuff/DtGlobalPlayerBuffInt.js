"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalPlayerBuffInt = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalPlayerBuffBase_1 = require("./DtGlobalPlayerBuffBase");
class DtGlobalPlayerBuffInt extends DtGlobalPlayerBuffBase_1.DtGlobalPlayerBuffBase {
    func;
    constructor(caster, toPlayer, buff, func, creator) {
        super(caster, toPlayer, buff, creator);
        this.func = func;
    }
    PlayerCondition_Int(player, buff, card) {
        if (buff != this.type) {
            return 0;
        }
        if (this.effectType == DtEnum_1.DtBuffEffectToType.Self) {
            if (this.effectPlayer != player) {
                return 0;
            }
        }
        else if (this.effectType == DtEnum_1.DtBuffEffectToType.Opponent) {
            if (this.effectPlayer == player) {
                return 0;
            }
        }
        if (this.roundValid == DtEnum_1.DtEffectRoundValid.Self) {
            if (this.effectPlayer.IsThisPlayerRound() == false) {
                return 0;
            }
        }
        else if (this.roundValid == DtEnum_1.DtEffectRoundValid.Opponent) {
            if (this.effectPlayer.IsThisPlayerRound()) {
                return 0;
            }
        }
        if (this.effectCard != null) {
            if (this.effectCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                return 0;
            }
        }
        if (this.func != null) {
            return this.func.call(this.creator, this, player);
        }
        return 0;
    }
}
exports.DtGlobalPlayerBuffInt = DtGlobalPlayerBuffInt;
//# sourceMappingURL=DtGlobalPlayerBuffInt.js.map