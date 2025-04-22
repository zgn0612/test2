"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtPlayer = void 0;
const Long_1 = require("../../../cmn/proto/Long");
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtArea_1 = require("../Area/DtArea");
const DtAreaBattle_1 = require("../Area/DtAreaBattle");
const DtAreaBrowse_1 = require("../Area/DtAreaBrowse");
const DtAreaDigitama_1 = require("../Area/DtAreaDigitama");
const DtAreaWait_1 = require("../Area/DtAreaWait");
const DtCard_1 = require("../Card/DtCard");
const DtEnum_1 = require("../Data/DtEnum");
const DtEventMsg_1 = require("../Data/DtEventMsg");
const DtEvent_1 = require("../DtEvent");
const DtMessageData_1 = require("../Message/DtMessageData");
const DtPlayerRoundData_1 = require("./DtPlayerRoundData");
class DtPlayer {
    manager;
    playerId;
    cardId;
    areaDefense;
    areaDigitama;
    areaDeck;
    areaGraveyard;
    areaHand;
    areaInBattle;
    areaEvo;
    areaToken;
    areaWait;
    areaBrowse;
    roundData;
    constructor(uId, manager, startCardId = null) {
        this.manager = manager;
        this.playerId = uId;
        this.areaDeck = new DtArea_1.DtArea(DtEnum_1.DtAreaType.DECK, this);
        this.areaDefense = new DtArea_1.DtArea(DtEnum_1.DtAreaType.DEFENSE, this);
        this.areaDigitama = new DtAreaDigitama_1.DtAreaDigitama(DtEnum_1.DtAreaType.DIGITAMA, this);
        this.areaGraveyard = new DtArea_1.DtArea(DtEnum_1.DtAreaType.GY, this);
        this.areaHand = new DtArea_1.DtArea(DtEnum_1.DtAreaType.HAND, this);
        this.areaInBattle = new DtAreaBattle_1.DtAreaBattle(DtEnum_1.DtAreaType.BATTLE_AREA, this);
        this.areaEvo = new DtArea_1.DtArea(DtEnum_1.DtAreaType.OTHER_EVO, this);
        this.areaToken = new DtArea_1.DtArea(DtEnum_1.DtAreaType.TOKEN, this);
        this.areaWait = new DtAreaWait_1.DtAreaWait(DtEnum_1.DtAreaType.WAIT, this);
        this.areaBrowse = new DtAreaBrowse_1.DtAreaBrowse(DtEnum_1.DtAreaType.BROWSE, this);
        if (startCardId != null) {
            this.cardId = startCardId;
        }
        else {
            this.cardId = Long_1.Long.fromNumber(Math.floor(Math.random() * 10000) + 227019);
        }
        this.roundData = new DtPlayerRoundData_1.DtPlayerRoundData(this);
        this.roundData.globalCard = new DtCard_1.DtCard(this, this.cardId, 0);
        this.roundData.globalCard.whereAreaType = DtEnum_1.DtAreaType.GLOBAL;
        this.roundData.startCardId = new Long_1.Long(this.cardId.low, this.cardId.high, this.cardId.unsigned);
    }
    Init(deck, egg) {
        for (let i = 0; i < deck.length; i++) {
            this.cardId = this.cardId.add(1);
            let card = new DtCard_1.DtCard(this, this.cardId, deck[i]);
            if (card.config != null) {
                this.areaDeck.PushCard(card);
            }
        }
        for (let i = 0; i < egg.length; i++) {
            this.cardId = this.cardId.add(1);
            let card = new DtCard_1.DtCard(this, this.cardId, egg[i]);
            if (card.config != null) {
                this.areaDigitama.PushCard(card);
            }
        }
    }
    StartBattle() {
        for (let i = 0; i < 5; i++) {
            this.DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
        }
        for (let i = 0; i < 5; i++) {
            this.SetDefenseCard();
        }
    }
    SetDefenseCard() {
        if (this.areaDeck.CardCount() > 0) {
            let card = this.areaDeck.GetTopCard();
            this.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.DEFENSE, DtMessageData_1.DtProtoEnum_MoveReason.SetDefense);
        }
    }
    DrawCard(type) {
        if (this.areaDeck.CardCount() > 0) {
            let card = this.areaDeck.GetTopCard();
            this.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, type);
            this.roundData.AddLogCount(DtEnum_1.DtPlayerLogType.DrawCard);
            return true;
        }
        return false;
    }
    FirstDrawCard(type) {
        if (this.areaDeck.CardCount() > 0) {
            let card = this.areaDeck.GetTopCard();
            this.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.TOKEN, type);
            this.roundData.AddLogCount(DtEnum_1.DtPlayerLogType.DrawCard);
            return true;
        }
        return false;
    }
    CreateTokenCard(cardId) {
        let card = this.areaToken.GetCardWithCardId(cardId);
        if (card == null) {
            this.cardId = this.cardId.add(1);
            card = new DtCard_1.DtCard(this, this.cardId, cardId);
            card.isToken = true;
            this.areaToken.PushCard(card);
        }
        return card;
    }
    CreateCardOutDeck(cardId) {
        this.cardId = this.cardId.add(1);
        let card = new DtCard_1.DtCard(this, this.cardId, cardId);
        if (card.config != null) {
            this.areaInBattle.PushCard(card);
            card.cardBattleState = DtEnum_1.DtCardBattleState.Activate;
            card.cardSummonRound = -1;
            card.OnInBattleArea();
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, DtEnum_1.DtAreaType.TOKEN, DtEnum_1.DtAreaType.BATTLE_AREA, DtMessageData_1.DtProtoEnum_MoveReason.Other);
        }
    }
    MoveCard(card, fromArea, toArea, reason, callBack = null) {
        let fArea = this.GetArea(fromArea);
        let tArea = this.GetArea(toArea);
        if (fArea.PopCardWithId(card.uid) != null) {
            tArea.PushCard(card, reason);
            if (callBack != null) {
                callBack(card);
            }
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, fromArea, toArea, reason);
            return card;
        }
        return null;
    }
    MoveCardNoMessage(card, fromArea, toArea, callBack = null) {
        let fArea = this.GetArea(fromArea);
        let tArea = this.GetArea(toArea);
        if (fArea.PopCardWithId(card.uid) != null) {
            tArea.PushCard(card);
            if (callBack != null) {
                callBack(card);
            }
            return card;
        }
        return null;
    }
    HatchDigitama() {
        if (this.areaDigitama.hatchedCard == null && this.areaDigitama && this.areaDigitama.CardCount() > 0) {
            let card = this.areaDigitama.PopCard();
            this.areaDigitama.PushHatchedCard(card);
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, DtEnum_1.DtAreaType.DIGITAMA, DtEnum_1.DtAreaType.DIGITAMA_HATCH, DtMessageData_1.DtProtoEnum_MoveReason.Hatch);
        }
    }
    HatchGoBattle(uid, index) {
        if (this.areaDigitama.hatchedCard != null && this.areaDigitama.hatchedCard.UidEquals(uid) && this.areaInBattle.CanAddCard()) {
            let card = this.areaDigitama.PopHatchedCard();
            card.cardBattleState = DtEnum_1.DtCardBattleState.Activate;
            if (index == -1) {
                this.areaInBattle.PushCard(card);
            }
            else {
                this.areaInBattle.PushCardWithIndex(card, index);
            }
            this.manager.FireListener(DtEvent_1.DtEventType.CardOnHatchPlay, new DtEventMsg_1.DtMsg_OnPlay(card, DtMessageData_1.DtProtoEnum_MoveReason.Hatch2Battle, DtEnum_1.DtAreaType.DIGITAMA_HATCH));
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, DtEnum_1.DtAreaType.DIGITAMA_HATCH, DtEnum_1.DtAreaType.BATTLE_AREA, DtMessageData_1.DtProtoEnum_MoveReason.Hatch2Battle);
            return card;
        }
    }
    DigimonEffectGoBattle(card, index, reason) {
        let fArea = this.GetArea(card.whereAreaType);
        let battleArea = this.areaInBattle;
        if (fArea.PopCardWithId(card.uid) != null) {
            if (index == -1) {
                battleArea.PushCard(card);
            }
            else {
                battleArea.PushCardWithIndex(card, index);
            }
            card.cardBattleState = DtEnum_1.DtCardBattleState.Activate;
            card.cardSummonRound = this.manager.CurRound;
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, fArea.areaType, DtEnum_1.DtAreaType.BATTLE_AREA, reason);
        }
    }
    DigimonEffectGoBattleAndResetState(card, index, reason) {
        let fArea = this.GetArea(card.whereAreaType);
        let battleArea = this.areaInBattle;
        if (fArea.PopCardWithId(card.uid) != null) {
            if (index == -1) {
                battleArea.PushCard(card);
            }
            else {
                battleArea.PushCardWithIndex(card, index);
            }
            card.cardBattleState = DtEnum_1.DtCardBattleState.Reset;
            card.cardSummonRound = this.manager.CurRound;
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, fArea.areaType, DtEnum_1.DtAreaType.BATTLE_AREA, reason);
        }
    }
    CardMoveTo(card, to, reason) {
        this.MoveCard(card, card.whereAreaType, to, reason);
    }
    CardMoveToBottom(card, to, reason) {
        let fromArea = card.whereAreaType;
        let fArea = this.GetArea(fromArea);
        let tArea = this.GetArea(to);
        if (fArea.PopCardWithId(card.uid) != null) {
            tArea.UnshiftCard(card);
            this.manager.Get2ClientMessageMgr().MoveCardMessage(this, card, fromArea, to, reason);
        }
    }
    TopCardInDeck2GY() {
        let card = this.areaDeck.GetTopCard();
        if (card) {
            this.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return card;
    }
    DiscardDefense() {
        let card = this.areaDefense.GetTopCard();
        if (card) {
            this.MoveCard(card, DtEnum_1.DtAreaType.DEFENSE, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.Discard);
        }
    }
    CardEvo(evoCard, originCard) {
        let handCard = this.GetArea(evoCard.whereAreaType).PopCardWithId(evoCard.uid);
        if (handCard != null) {
            let oriCard = null;
            if (this.areaDigitama.hatchedCard != null && this.areaDigitama.hatchedCard.UidEquals(originCard.uid)) {
                oriCard = this.areaDigitama.PopHatchedCard();
                this.areaDigitama.PushHatchedCard(handCard);
            }
            else {
                oriCard = this.areaInBattle.PopCardWithId(originCard.uid);
                this.areaInBattle.PushCardWithIndex(handCard, this.areaInBattle.GetCardIndex(oriCard.uid));
            }
            if (oriCard == null) {
                return;
            }
            handCard.evoOriginPrevCardUId = oriCard.uid;
            this.areaEvo.PushCard(oriCard);
            handCard.CalculateDigimonOriginList();
            this.manager.Get2ClientMessageMgr().EvoDigimon(this, handCard, oriCard);
            if (evoCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                this.roundData.AddPlayerEvoCount();
            }
        }
    }
    CardFusionEvo(evoCard, oriTopCard, oriBottomCard) {
        let handCard = this.GetArea(evoCard.whereAreaType).PopCardWithId(evoCard.uid);
        if (handCard != null) {
            let topCard = this.areaInBattle.PopCardWithId(oriTopCard.uid);
            let bottomCard = this.areaInBattle.PopCardWithId(oriBottomCard.uid);
            if (topCard == null || bottomCard == null) {
                return;
            }
            let topLastOri = topCard.GetBottomOriginDigimon();
            topLastOri.evoOriginPrevCardUId = oriBottomCard.uid;
            this.areaInBattle.PushCard(handCard);
            handCard.evoOriginPrevCardUId = topCard.uid;
            this.areaEvo.PushCard(topCard);
            this.areaEvo.PushCard(bottomCard);
            handCard.CalculateDigimonOriginList();
            this.manager.Get2ClientMessageMgr().FusionEvoDigimon(this, handCard, topCard, bottomCard);
            if (evoCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                this.roundData.AddPlayerEvoCount();
            }
        }
    }
    CardDiscardEvoOrigin(card, origin, toAreaType, toUp = true) {
        this.manager.Get2ClientMessageMgr().ClientShow(this, DtMessageData_1.ClientShowType.BeDisCardEvo, [card.uid], "");
        let evoOriCards = card.GetOriginDigimonList();
        let preCard = card;
        for (let i = 0; i < evoOriCards.length; i++) {
            if (evoOriCards[i] == origin) {
                preCard.evoOriginPrevCardUId = evoOriCards[i].evoOriginPrevCardUId;
                this.manager.Get2ClientMessageMgr().UpdateCardDetails(this, preCard);
                let removeOriginCard = this.areaEvo.PopCardWithId(evoOriCards[i].uid);
                if (removeOriginCard) {
                    let toArea = this.GetArea(toAreaType);
                    if (toUp) {
                        toArea.PushCard(removeOriginCard);
                    }
                    else {
                        toArea.UnshiftCard(removeOriginCard);
                    }
                    this.manager.Get2ClientMessageMgr().MoveCardMessage(this, removeOriginCard, DtEnum_1.DtAreaType.OTHER_EVO, toAreaType, DtMessageData_1.DtProtoEnum_MoveReason.DiscardEvoOrigin);
                    card.RemoveOriginDigimon(removeOriginCard);
                }
                break;
            }
            preCard = evoOriCards[i];
        }
        card.CalculateDigimonOriginList();
    }
    PopCardFromCardEvo(card, origin, reason = DtMessageData_1.DtProtoEnum_MoveReason.Discard) {
        this.manager.Get2ClientMessageMgr().ClientShow(this, DtMessageData_1.ClientShowType.BeDisCardEvo, [card.uid], "");
        let evoOriCards = card.GetOriginDigimonList();
        let preCard = card;
        let success = false;
        for (let i = 0; i < evoOriCards.length; i++) {
            if (evoOriCards[i] == origin) {
                success = true;
                preCard.evoOriginPrevCardUId = evoOriCards[i].evoOriginPrevCardUId;
                this.manager.Get2ClientMessageMgr().UpdateCardDetails(this, preCard);
                card.RemoveOriginDigimon(evoOriCards[i]);
                break;
            }
            preCard = evoOriCards[i];
        }
        card.CalculateDigimonOriginList();
        return success;
    }
    CardDegenerate(caster, card, time) {
        let rcard = card;
        let arrProcess = new Array();
        for (let i = 0; i < time; i++) {
            rcard = this.DegenerateOnce(rcard);
            if (rcard) {
                arrProcess.push(rcard);
            }
            else {
                break;
            }
        }
        this.manager.Get2ClientMessageMgr().DegenerateDigimon(this, card, arrProcess, DtEnum_1.DtDegenerateType.Degenerate, caster);
        return rcard;
    }
    DegenerateOnce(card) {
        let listOrigin = card.GetOriginDigimonList();
        if (listOrigin.length > 0) {
            let lastOriCard = this.areaEvo.GetCard(card.evoOriginPrevCardUId);
            if (lastOriCard) {
                this.MoveCardNoMessage(card, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtAreaType.GY);
                this.MoveCardNoMessage(lastOriCard, DtEnum_1.DtAreaType.OTHER_EVO, DtEnum_1.DtAreaType.BATTLE_AREA);
                lastOriCard.CalculateDigimonOriginList();
                return lastOriCard;
            }
        }
        _Dcg_1.gLog.err("degenerate error!!!!");
        return null;
    }
    CardArmorPurge(caster, card, degType) {
        let rcard = card;
        let arrProcess = new Array();
        rcard = this.DegenerateOnce(rcard);
        arrProcess.push(rcard);
        this.manager.Get2ClientMessageMgr().DegenerateDigimon(this, card, arrProcess, degType, caster);
        return rcard;
    }
    Restore() {
        if (this.areaDeck.CardCount() > 0) {
            let rCard = this.areaDeck.GetTopCard();
            this.MoveCard(rCard, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.DEFENSE, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
    }
    DrawCardFromDefense(caster, card, reason) {
        this.MoveCard(card, DtEnum_1.DtAreaType.DEFENSE, DtEnum_1.DtAreaType.HAND, reason);
    }
    GetBattleCardsReLimit() {
        return this.manager.PlayerBattleCardsReLimit(this);
    }
    IsThisPlayerRound() {
        return this.PlayerIdEquals(this.manager.CurPlayerID);
    }
    GetOppPlayer() {
        return this.manager.GetOppPlayer(this.playerId);
    }
    GetArea(type) {
        switch (type) {
            case DtEnum_1.DtAreaType.BATTLE_AREA:
                return this.areaInBattle;
            case DtEnum_1.DtAreaType.OTHER_EVO:
                return this.areaEvo;
            case DtEnum_1.DtAreaType.DECK:
                return this.areaDeck;
            case DtEnum_1.DtAreaType.DEFENSE:
                return this.areaDefense;
            case DtEnum_1.DtAreaType.DIGITAMA:
            case DtEnum_1.DtAreaType.DIGITAMA_HATCH:
                return this.areaDigitama;
            case DtEnum_1.DtAreaType.HAND:
                return this.areaHand;
            case DtEnum_1.DtAreaType.GY:
                return this.areaGraveyard;
            case DtEnum_1.DtAreaType.TOKEN:
                return this.areaToken;
            case DtEnum_1.DtAreaType.WAIT:
                return this.areaWait;
            case DtEnum_1.DtAreaType.BROWSE:
                return this.areaBrowse;
        }
        return this.areaHand;
    }
    GetReconnectData(playerID) {
        let data = new protoMsg_1.DcgProto.S_ReconnectPlayer();
        data.PlayerIID = this.playerId;
        data.AreaDeck = this.areaDeck.CardCount();
        data.AreaDefense = this.areaDefense.CardCount();
        data.AreaDigitama = this.areaDigitama.CardCount();
        data.AreaDigitamaHatch = this.manager.Get2ClientMessageMgr().GetReconnectCardInfo(this.areaDigitama.hatchedCard);
        data.AreaEvo = this.areaEvo.GetReconnectData();
        data.AreaGraveyard = this.areaGraveyard.GetReconnectData();
        data.AreaHand = this.areaHand.GetReconnectData();
        if (playerID && this.playerId.equals(playerID) == false && data.AreaHand) {
            for (let i = 0; i < data.AreaHand.length; i++) {
                data.AreaHand[i].OtherCard.CfgId = 0;
                data.AreaHand[i].LastHandInfo = null;
            }
        }
        data.AreaInBattle = this.areaInBattle.GetReconnectData();
        data.AreaWait = this.areaWait.GetReconnectData();
        data.AreaWaitBefore = Number(this.areaWait.lastArea);
        data.AreaBrowse = this.areaBrowse.GetReconnectData();
        data.AreaBrowseBefore = Number(this.areaBrowse.lastArea);
        data.RemainingTime = this.roundData.GetRemainingTime();
        return data;
    }
    GetGameBattlePlayer() {
        let msg = new protoMsg_1.DcgProto.S_GameBattlePlayer();
        msg.PlayerIID = this.playerId;
        msg.GameBattleCards = new Array();
        msg.GameHandCards = new Array();
        this.areaInBattle.ForeachCards((card) => {
            let cardMsg = card.GetGameBattleCard();
            if (cardMsg) {
                msg.GameBattleCards.push(cardMsg);
            }
        });
        this.areaHand.ForeachCards((card) => {
            let cardMsg = card.GetGameHandCard();
            if (cardMsg) {
                msg.GameHandCards.push(cardMsg);
            }
        });
        msg.PlayerBuffs = this.roundData.GetCurrentBuffs();
        if (this.areaInBattle.CanAddCard() == false) {
            msg.PlayerBuffs.push(DtEnum_1.DtBuffType.PLAYER_BATTLE_AREA_IN_LIMIT);
        }
        return msg;
    }
    PlayerIdEquals(id) {
        return this.playerId.equals(id);
    }
    Clear() {
        if (this.areaDeck) {
            this.areaDeck.Clear();
            this.areaDeck = null;
        }
        if (this.areaDefense) {
            this.areaDefense.Clear();
            this.areaDefense = null;
        }
        if (this.areaDigitama) {
            this.areaDigitama.Clear();
            this.areaDigitama = null;
        }
        if (this.areaGraveyard) {
            this.areaGraveyard.Clear();
            this.areaGraveyard = null;
        }
        if (this.areaHand) {
            this.areaHand.Clear();
            this.areaHand = null;
        }
        if (this.areaInBattle) {
            this.areaInBattle.Clear();
            this.areaInBattle = null;
        }
        if (this.areaEvo) {
            this.areaEvo.Clear();
            this.areaEvo = null;
        }
        if (this.areaToken) {
            this.areaToken.Clear();
            this.areaToken = null;
        }
        if (this.areaWait) {
            this.areaWait.Clear();
            this.areaWait = null;
        }
        if (this.areaBrowse) {
            this.areaBrowse.Clear();
            this.areaBrowse = null;
        }
        this.manager = null;
    }
}
exports.DtPlayer = DtPlayer;
//# sourceMappingURL=DtPlayer.js.map