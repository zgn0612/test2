"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtAreaBattle = void 0;
const DtArea_1 = require("./DtArea");
class DtAreaBattle extends DtArea_1.DtArea {
    dicCardIndex;
    constructor(type, player) {
        super(type, player);
        this.dicCardIndex = new Map();
    }
    PushCardWithIndex(card, idx) {
        this.ReSortCards();
        super.PushCard(card);
        this.SetCardIndex(card.uid, idx);
    }
    PushCard(card) {
        this.ReSortCards();
        super.PushCard(card);
        this.SetCardIndex(card.uid);
    }
    GetReconnectData() {
        this.ReSortCards();
        return super.GetReconnectData();
    }
    ReSortCards() {
        this.cards.sort((a, b) => {
            return this.GetCardIndex(a.uid) - this.GetCardIndex(b.uid);
        });
        for (let i = 0; i < this.cards.length; i++) {
            this.SetCardIndex(this.cards[i].uid, (i + 1) * 100);
        }
    }
    SetCardIndex(uid, idx) {
        if (idx == null) {
            idx = (this.cards.length + 1) * 100;
        }
        this.dicCardIndex.set(uid, idx);
    }
    GetCardIndex(uid) {
        if (this.dicCardIndex.has(uid)) {
            return this.dicCardIndex.get(uid);
        }
        return 0;
    }
    CanAddCard() {
        return this.parent.manager.PlayerBattleCardsReLimit(this.parent) > 0;
    }
}
exports.DtAreaBattle = DtAreaBattle;
//# sourceMappingURL=DtAreaBattle.js.map