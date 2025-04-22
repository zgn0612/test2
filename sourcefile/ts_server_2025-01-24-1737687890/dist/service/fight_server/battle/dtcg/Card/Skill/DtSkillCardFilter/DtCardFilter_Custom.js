"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_Custom = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_Custom extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    CustomFilterEvent;
    call;
    constructor(call, func) {
        super();
        this.call = call;
        this.CustomFilterEvent = func;
    }
    OnFilterCard(card) {
        if (this.CustomFilterEvent) {
            return this.CustomFilterEvent.call(this.call, card, this.effect);
        }
        return false;
    }
}
exports.DtCardFilter_Custom = DtCardFilter_Custom;
//# sourceMappingURL=DtCardFilter_Custom.js.map