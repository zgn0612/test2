"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CheckOppPlayHasLock3Card = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const AICon_base_1 = require("./AICon_base");
class AICon_CheckOppPlayHasLock3Card extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let player = this.root.GetOPPlayer();
        return player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).CheckWithCondition((card) => {
            return card.HasEffect(DtEnum_1.EFFECT_NAME.ROLE_LOCK_3);
        });
    }
}
exports.AICon_CheckOppPlayHasLock3Card = AICon_CheckOppPlayHasLock3Card;
//# sourceMappingURL=AICon_CheckOppPlayHasLock3Card.js.map