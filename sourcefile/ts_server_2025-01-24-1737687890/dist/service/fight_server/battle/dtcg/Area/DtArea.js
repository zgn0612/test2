"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtArea = void 0;
const DtEventMsg_1 = require("../Data/DtEventMsg");
const DtEvent_1 = require("../DtEvent");
const DtMessageData_1 = require("../Message/DtMessageData");
class DtArea {
    parent;
    cards;
    areaType;
    constructor(type, player) {
        this.cards = new Array();
        this.areaType = type;
        this.parent = player;
    }
    CardCount() {
        return this.cards.length;
    }
    PushCard(card, reason = DtMessageData_1.DtProtoEnum_MoveReason.None) {
        this.cards.push(card);
        card.SetCardWhere(this.areaType);
        this.parent.manager.FireListener(DtEvent_1.DtEventType.AreaCardsChange, new DtEventMsg_1.DtMsg_AreaChange(card, this.areaType, true, reason));
    }
    UnshiftCard(card) {
        this.cards.unshift(card);
        card.SetCardWhere(this.areaType);
        this.parent.manager.FireListener(DtEvent_1.DtEventType.AreaCardsChange, new DtEventMsg_1.DtMsg_AreaChange(card, this.areaType, true, DtMessageData_1.DtProtoEnum_MoveReason.None));
    }
    PopCard() {
        let card = this.cards.pop();
        this.parent.manager.FireListener(DtEvent_1.DtEventType.AreaCardsChange, new DtEventMsg_1.DtMsg_AreaChange(card, this.areaType, false, DtMessageData_1.DtProtoEnum_MoveReason.None));
        return card;
    }
    PopCardWithId(uid) {
        let card = null;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].UidEquals(uid)) {
                card = this.cards[i];
                this.cards.splice(i, 1);
                break;
            }
        }
        this.parent.manager.FireListener(DtEvent_1.DtEventType.AreaCardsChange, new DtEventMsg_1.DtMsg_AreaChange(card, this.areaType, false, DtMessageData_1.DtProtoEnum_MoveReason.None));
        return card;
    }
    DeckCardPutInTheBottom(uid) {
        let card = null;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].UidEquals(uid)) {
                card = this.cards[i];
                this.cards.splice(i, 1);
                break;
            }
        }
        if (card != null) {
            this.cards.unshift(card);
        }
    }
    DeckCardPutInTheTop(uid) {
        let card = null;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].UidEquals(uid)) {
                card = this.cards[i];
                this.cards.splice(i, 1);
                break;
            }
        }
        if (card != null) {
            this.cards.push(card);
        }
    }
    GetCard(uid) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].UidEquals(uid)) {
                return this.cards[i];
            }
        }
        return null;
    }
    GetTopCard() {
        return this.cards[this.cards.length - 1];
    }
    GetTopCards(nums) {
        let cards = Array();
        if (this.cards.length < nums) {
            for (let i = 0; i < this.cards.length; i++) {
                cards.push(this.cards[i]);
            }
        }
        else {
            for (let i = this.cards.length - nums; i < this.cards.length; i++) {
                cards.push(this.cards[i]);
            }
        }
        return cards;
    }
    GetCardWithCardId(cardid) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].config.id == cardid) {
                return this.cards[i];
            }
        }
        return null;
    }
    GetTheCopyCards() {
        let cards = Array();
        for (let i = 0; i < this.cards.length; i++) {
            cards.push(this.cards[i]);
        }
        return cards;
    }
    GetReconnectData() {
        let cards = new Array();
        for (let i = 0; i < this.cards.length; i++) {
            cards.push(this.parent.manager.Get2ClientMessageMgr().GetReconnectCardInfo(this.cards[i]));
        }
        return cards;
    }
    RandomSort() {
        let repeat = false;
        let indexArray = new Array(this.cards.length);
        for (let i = 0; i < indexArray.length; i++) {
            repeat = false;
            let rand = Math.floor(this.parent.manager.Random.range(0, 1) * indexArray.length);
            for (let k = 0; k < i; k++) {
                if (indexArray[k] == rand) {
                    i--;
                    repeat = true;
                    break;
                }
            }
            if (repeat == false) {
                indexArray[i] = rand;
            }
        }
        let ranArray = new Array(this.cards.length);
        for (let i = 0; i < ranArray.length; i++) {
            let index = indexArray[i];
            ranArray[i] = this.cards[index];
        }
        this.cards = ranArray;
    }
    CheckWithCondition(func) {
        for (let i = 0; i < this.cards.length; i++) {
            if (func(this.cards[i])) {
                return true;
            }
        }
        return false;
    }
    GetListWithCondition(func) {
        let ret = new Array();
        for (let i = 0; i < this.cards.length; i++) {
            if (func(this.cards[i])) {
                ret.push(this.cards[i]);
            }
        }
        return ret;
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
    ForeachCards(func) {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            func(this.cards[i]);
        }
    }
    GetPlaybackInfo() {
        let pbInfo = new Array();
        for (let i = 0; i < this.cards.length; i++) {
            pbInfo.push(this.cards[i].config.id);
        }
        return pbInfo;
    }
    Clear() {
        if (this.cards != null) {
            for (let i = 0; i < this.cards.length; i++) {
                this.cards[i].Clear();
            }
            this.cards = null;
        }
    }
}
exports.DtArea = DtArea;
//# sourceMappingURL=DtArea.js.map