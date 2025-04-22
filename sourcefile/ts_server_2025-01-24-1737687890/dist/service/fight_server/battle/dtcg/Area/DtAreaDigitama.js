"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtAreaDigitama = void 0;
const DtEnum_1 = require("../Data/DtEnum");
const DtArea_1 = require("./DtArea");
class DtAreaDigitama extends DtArea_1.DtArea {
    hatchedCard;
    constructor(type, player) {
        super(type, player);
    }
    PushHatchedCard(card) {
        this.hatchedCard = card;
        this.hatchedCard.SetCardWhere(DtEnum_1.DtAreaType.DIGITAMA_HATCH);
    }
    PopHatchedCard() {
        let card = this.hatchedCard;
        this.hatchedCard = null;
        return card;
    }
    Clear() {
        super.Clear();
        if (this.hatchedCard != null) {
            this.hatchedCard.Clear();
            this.hatchedCard = null;
        }
    }
}
exports.DtAreaDigitama = DtAreaDigitama;
//# sourceMappingURL=DtAreaDigitama.js.map