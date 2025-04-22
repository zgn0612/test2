"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LgArea = void 0;
const DtEnum_1 = require("../../dtcg/Data/DtEnum");
class LgArea {
    parent;
    type = DtEnum_1.DtAreaType.None;
    cards;
    constructor(parent, type) {
        this.parent = parent;
        this.type = type;
        this.cards = new Array();
    }
    CardCount() {
        return this.cards.length;
    }
    PopCard(uid) {
        let card = null;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].uid.equals(uid)) {
                card = this.cards[i];
                this.cards.splice(i, 1);
                break;
            }
        }
        if (card == null) {
            card = this.parent.CreateCard(uid);
        }
        return card;
    }
    PushCard(card) {
        if (card == null) {
            return;
        }
        this.cards.push(card);
        card.SetArea(this);
    }
    GetCard(uid) {
        if (uid == null) {
            return;
        }
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].uid.equals(uid)) {
                return this.cards[i];
            }
        }
        return null;
    }
    HasCard(uid) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].uid.equals(uid)) {
                return true;
            }
        }
        return false;
    }
    ForeachCards(func) {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            func(this.cards[i]);
        }
    }
    CheckWithCondition(func) {
        if (this.cards) {
            for (let i = 0; i < this.cards.length; i++) {
                if (func(this.cards[i])) {
                    return true;
                }
            }
        }
        return false;
    }
    GetTheCopyCards() {
        let lst = new Array();
        for (let i = 0; i < this.cards.length; i++) {
            lst.push(this.cards[i]);
        }
        return lst;
    }
    GetCountWithMeetCondition(func) {
        let count = 0;
        for (let i = 0; i < this.cards.length; i++) {
            if (func(this.cards[i])) {
                count++;
            }
        }
        return count;
    }
    Reconnect(data) {
        if (data) {
            if (data && data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    let card = this.parent.CreateCard(data[i].OtherCard.CardIID);
                    this.PushCard(card);
                    card.SetData(data[i].OtherCard, data[i].OtherCardDetail);
                    if (data[i].LastBattleInfo) {
                        card.UpdateGameBattleData(data[i].LastBattleInfo);
                    }
                    if (data[i].LastHandInfo) {
                        card.UpdateGameHandData(data[i].LastHandInfo);
                    }
                }
            }
        }
    }
}
exports.LgArea = LgArea;
//# sourceMappingURL=LgArea.js.map