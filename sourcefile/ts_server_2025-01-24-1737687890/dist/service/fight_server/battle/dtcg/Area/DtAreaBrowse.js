"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtAreaBrowse = void 0;
const DtArea_1 = require("./DtArea");
class DtAreaBrowse extends DtArea_1.DtArea {
    lastArea;
    PushCard(card) {
        this.lastArea = card.whereAreaType;
        super.PushCard(card);
    }
}
exports.DtAreaBrowse = DtAreaBrowse;
//# sourceMappingURL=DtAreaBrowse.js.map