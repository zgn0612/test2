"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtAreaWait = void 0;
const DtEnum_1 = require("../Data/DtEnum");
const DtArea_1 = require("./DtArea");
class DtAreaWait extends DtArea_1.DtArea {
    lastArea;
    dicCardBeforeData;
    PushCard(card) {
        this.lastArea = card.whereAreaType;
        this.SetCardBeforeData(card);
        super.PushCard(card);
    }
    PopCard() {
        let card = super.PopCard();
        this.DeleteardData(card.uid);
        return card;
    }
    PopCardWithId(uid) {
        let card = super.PopCardWithId(uid);
        this.DeleteardData(card.uid);
        return card;
    }
    SetCardBeforeData(card) {
        if (this.dicCardBeforeData == null) {
            this.dicCardBeforeData = new Map();
        }
        this.dicCardBeforeData.set(card.uid, card.whereAreaType);
    }
    DeleteardData(cardUid) {
        if (this.dicCardBeforeData == null) {
            this.dicCardBeforeData = new Map();
        }
        if (this.dicCardBeforeData.has(cardUid)) {
            this.dicCardBeforeData.delete(cardUid);
        }
    }
    GetCardBeforeData(cardUid) {
        if (this.dicCardBeforeData == null) {
            this.dicCardBeforeData = new Map();
        }
        if (this.dicCardBeforeData.has(cardUid)) {
            return this.dicCardBeforeData.get(cardUid);
        }
        return DtEnum_1.DtAreaType.None;
    }
}
exports.DtAreaWait = DtAreaWait;
//# sourceMappingURL=DtAreaWait.js.map