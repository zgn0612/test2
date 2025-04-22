"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalPlayerBuffBase = void 0;
const DtGlobalBuffBase_1 = require("./DtGlobalBuffBase");
class DtGlobalPlayerBuffBase extends DtGlobalBuffBase_1.DtGlobalBuffBase {
    constructor(caster, toPlayer, buff, creator) {
        super(caster, creator);
        this.effectType = toPlayer;
        this.type = buff;
    }
    PlayerCondition(player, buff) {
        return false;
    }
    PlayerCondition_Int(player, buff, card) {
        return 0;
    }
}
exports.DtGlobalPlayerBuffBase = DtGlobalPlayerBuffBase;
//# sourceMappingURL=DtGlobalPlayerBuffBase.js.map