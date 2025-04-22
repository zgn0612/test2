"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardBattleState = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardBattleState extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    battleState;
    constructor(state) {
        super();
        this.battleState = state;
    }
    OnFilterCard(card) {
        return card.cardBattleState == this.battleState;
    }
}
exports.DtCardFilter_CardBattleState = DtCardFilter_CardBattleState;
//# sourceMappingURL=DtCardFilter_CardBattleState.js.map