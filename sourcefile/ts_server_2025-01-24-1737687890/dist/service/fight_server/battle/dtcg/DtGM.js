"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGM = void 0;
const Long_1 = require("../../cmn/proto/Long");
const protoMsg_1 = require("../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../cmn/_Dcg");
const DtCard_1 = require("./Card/DtCard");
const DtEnum_1 = require("./Data/DtEnum");
const DtFsmAttackEnum_1 = require("./Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("./Message/DtMessageData");
class DtGM {
    manager;
    testId = Long_1.Long.fromNumber(1000000);
    constructor(mgr) {
        this.manager = mgr;
    }
    OnGm(playerid, gm) {
        let spstrspace = gm.split(":");
        if (spstrspace.length > 1) {
            if (spstrspace[0] == "SET_CARD") {
                this.SetCard(playerid, spstrspace[1]);
                return true;
            }
            else if (spstrspace[0] == "C") {
                let nextSplits = spstrspace[1].split(",");
                let gmcmd = nextSplits[0];
                nextSplits.splice(0, 1);
                _Dcg_1.gLog.sys("run cmd:  " + gm);
                return this.GMClient(playerid, gmcmd, ...nextSplits);
            }
            else if (spstrspace[0] == "PGM") {
                return this.AIGM(playerid, spstrspace[1]);
            }
        }
        return false;
    }
    SetCard(playerid, str) {
        let spstrspace = str.split("|");
        let cards = spstrspace[2].split(",").map(Number);
        let player1 = this.manager.GetPlayer(playerid);
        if (Number(spstrspace[0]) == 0) {
            player1 = this.manager.GetOppPlayer(playerid);
        }
        for (let i = 0; i < cards.length; i++) {
            this.testId = this.testId.add(1);
            let card = new DtCard_1.DtCard(player1, this.testId, cards[i]);
            player1.areaDeck.PushCard(card);
            if (Number(spstrspace[1]) == 1) {
                player1.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
            else if (Number(spstrspace[1]) == 2) {
                player1.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.DIGITAMA, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
            else if (Number(spstrspace[1]) == 3) {
                player1.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.DEFENSE, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        this.UpdateGameBattleInfo();
    }
    AIGM(playerid, str) {
        let cmd = str.split(",");
        let player = this.manager.GetPlayer(playerid);
        if (cmd[0] == "PlayCard") {
            if (cmd.length == 2) {
                if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.FosterPhase) {
                    if (player.areaDigitama.hatchedCard && player.areaDigitama.hatchedCard.config.card_number == cmd[1].toUpperCase()) {
                        this.manager.OnDigimonCardPlay(player.playerId, player.areaDigitama.hatchedCard.uid, 0);
                    }
                }
                else {
                    let card = player.areaHand.GetListWithCondition((card) => { return card.config.card_number == cmd[1].toUpperCase(); })[0];
                    if (card) {
                        this.manager.OnDigimonCardPlay(player.playerId, card.uid, 0);
                    }
                }
            }
            else {
                _Dcg_1.gLog.err("wrong gm  PlayCard !!!!");
            }
        }
        if (cmd[0] == "EvoCard") {
            if (cmd.length == 3) {
                let handcard = player.areaHand.GetListWithCondition((card) => { return card.config.card_number == cmd[1].toUpperCase(); })[0];
                let battlecard = player.areaInBattle.GetListWithCondition((card) => { return card.config.card_number == cmd[2].toUpperCase(); })[0];
                if (handcard && battlecard) {
                    this.manager.OnDigimonEvo(player.playerId, handcard.uid, battlecard.uid, 0);
                }
            }
            else {
                _Dcg_1.gLog.err("wrong gm  EvoCard !!!!");
            }
        }
        if (cmd[0] == "AtkPlayer") {
            if (cmd.length == 2) {
                let battlecard = player.areaInBattle.GetListWithCondition((card) => { return card.config.card_number == cmd[1].toUpperCase(); })[0];
                if (battlecard) {
                    this.manager.OnDigimonAttackDefense(player.playerId, battlecard.uid);
                }
            }
            else {
                _Dcg_1.gLog.err("wrong gm  AtkPlayer !!!!");
            }
        }
        if (cmd[0] == "AtkDigimon") {
            if (cmd.length == 3) {
                let atkcard = player.areaInBattle.GetListWithCondition((card) => { return card.config.card_number == cmd[1].toUpperCase(); })[0];
                let defcard = player.GetOppPlayer().areaInBattle.GetListWithCondition((card) => { return card.config.card_number == cmd[2].toUpperCase(); })[0];
                if (atkcard && defcard) {
                    this.manager.OnDigimonBattle(player.playerId, atkcard.uid, defcard.uid);
                }
            }
            else {
                _Dcg_1.gLog.err("wrong gm  AtkDigimon !!!!");
            }
        }
        if (cmd[0] == "Hatch") {
            this.manager.OnPlayerHatchDigimon(player.playerId);
        }
        if (cmd[0] == "EvoHatch") {
            let handcard = player.areaHand.GetListWithCondition((card) => { return card.config.card_number == cmd[1].toUpperCase(); })[0];
            let hatch = player.areaDigitama.hatchedCard;
            if (handcard && hatch) {
                this.manager.OnDigimonEvo(player.playerId, handcard.uid, hatch.uid, 0);
            }
        }
        if (cmd[0] == "Skip") {
            this.manager.OnPlayerSetNextTurn(player.playerId);
        }
        return true;
    }
    GMClient(playerid, str, ...params) {
        this.testId = this.testId.add(1);
        let player = this.manager.GetPlayer(playerid);
        str = str.toLocaleLowerCase();
        if (str == "discard") {
            let hands = player.areaHand.GetTheCopyCards();
            for (let i = 0; i < hands.length; i++) {
                this.manager.OnCardMoveTo(null, hands[i], DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        if (str == "dopp") {
            let hands = player.GetOppPlayer().areaHand.GetTheCopyCards();
            for (let i = 0; i < hands.length; i++) {
                this.manager.OnCardMoveTo(null, hands[i], DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        if (str == "canattack") {
            let cards = player.areaInBattle.GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                cards[i].cardSummonRound = 0;
                this.manager.Get2ClientMessageMgr().UpdateCardDetails(player, cards[i]);
            }
        }
        if (str == "fullcost") {
            this.manager.SetCost(10);
        }
        if (str == "win") {
            this.manager.GameOver(player, DtEnum_1.DtGameOverReason.QUIT_GAME);
            return true;
        }
        if (str == "allactive") {
            let cards = player.areaInBattle.GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                this.manager.OnSetCardActiveState(null, cards[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        if (str == "uc") {
            if (this.manager.RoomTypeIs(DtMessageData_1.DtRoomType.NoCost)) {
                this.manager.roomData.type = this.manager.roomData.type ^ DtMessageData_1.DtRoomType.NoCost;
            }
        }
        if (str == "tover") {
            if (this.manager.reconnectData = null) {
                let result = false;
                let waitid = this.manager.GetWaitPlayerId();
                if (waitid != null) {
                    if (this.manager.IsClear() == false) {
                        result = this.RunSimpleAI();
                    }
                }
            }
            else {
                this.manager.OnPlayerSetNextTurn(this.manager.CurPlayerID);
            }
        }
        if (str == "opatk") {
            let playerOpp = player.GetOppPlayer();
            this.manager.OnDigimonAttackDefense(playerOpp.playerId, playerOpp.areaInBattle.GetTopCard().uid, true);
        }
        if (str == "oppfirstattack") {
            let playerOpp = player.GetOppPlayer();
            let cards = playerOpp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].CanAttack() && cards[i].CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null)) {
                    this.manager.OnDigimonAttackDefense(playerOpp.playerId, cards[i].uid, true);
                }
            }
        }
        if (str == "evo") {
            if (params.length == 2) {
                let playerOpp = player.GetOppPlayer();
                let bcard = this.GetBattleCard(playerOpp, params[0]);
                let id = this.GetCardId(params[1]);
                if (bcard && id != 0) {
                    let card = new DtCard_1.DtCard(playerOpp, this.testId, id);
                    playerOpp.areaDeck.PushCard(card);
                    playerOpp.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    this.manager.ForceDigimonEvo(playerOpp, card, bcard, 0);
                }
            }
        }
        if (str == "nb_evo_hatch") {
            let id = this.GetCardId(params[0]);
            if (player.areaDigitama.hatchedCard) {
                if (id != 0) {
                    let card = new DtCard_1.DtCard(player, this.testId, id);
                    player.areaDeck.PushCard(card);
                    player.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    this.SimpleEvo(card, player.areaDigitama.hatchedCard);
                }
            }
        }
        if (str == "nb_evo_battle") {
            if (params.length == 2) {
                let bcard = this.GetBattleCard(player, params[0]);
                let id = this.GetCardId(params[1]);
                if (bcard && id != 0) {
                    let card = new DtCard_1.DtCard(player, this.testId, id);
                    player.areaDeck.PushCard(card);
                    player.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    this.SimpleEvo(card, bcard);
                }
            }
        }
        if (str == "nb_reset") {
            if (params.length == 1) {
                let bcard = this.GetBattleCard(player, params[0]);
                if (bcard) {
                    bcard.cardBattleState = DtEnum_1.DtCardBattleState.Reset;
                    this.manager.Get2ClientMessageMgr().UpdateCardDetails(player, bcard);
                }
            }
        }
        if (str == "evohatch") {
            let playerOpp = player.GetOppPlayer();
            if (playerOpp.areaDigitama.hatchedCard) {
                let id = this.GetCardId(params[0]);
                if (id != 0) {
                    let card = new DtCard_1.DtCard(playerOpp, this.testId, id);
                    playerOpp.areaDeck.PushCard(card);
                    playerOpp.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    this.manager.ForceDigimonEvo(playerOpp, card, playerOpp.areaDigitama.hatchedCard, 0);
                }
            }
            else {
                this.manager.EffectHatchDigimon(playerOpp);
            }
        }
        if (str == "removedeck1") {
            let cards = player.areaDeck.GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                cards[i].parent.CardMoveTo(cards[i], DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        if (str == "hatch") {
            this.manager.EffectHatchDigimon(player);
            this.manager.EffectHatchGoBattle(player);
        }
        if (str == "ophatch") {
            this.manager.EffectHatchDigimon(player.GetOppPlayer());
            this.manager.EffectHatchGoBattle(player.GetOppPlayer());
        }
        if (str == "draw") {
            player.DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (str == "playcard") {
            let playerOpp = player.GetOppPlayer();
            let card = null;
            let id = this.GetCardId(params[0]);
            if (id == 0) {
                card = new DtCard_1.DtCard(playerOpp, this.testId, 101007);
            }
            else {
                card = new DtCard_1.DtCard(playerOpp, this.testId, id);
            }
            playerOpp.areaDeck.PushCard(card);
            playerOpp.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.manager.Get2ClientMessageMgr().ClientShow(playerOpp, DtMessageData_1.ClientShowType.CardEffect, [card.uid], "");
            this.manager.Get2ClientMessageMgr().ClientShow(playerOpp, DtMessageData_1.ClientShowType.CardEffectOver, [card.uid], "");
            this.manager.OnUseCard(null, playerOpp, card, false, false, DtMessageData_1.DtProtoEnum_MoveReason.PlayCard);
        }
        if (str == "playcardeff") {
            let playerOpp = player.GetOppPlayer();
            let card = null;
            let id = this.GetCardId(params[0]);
            if (id == 0) {
                card = new DtCard_1.DtCard(playerOpp, this.testId, 101007);
            }
            else {
                card = new DtCard_1.DtCard(playerOpp, this.testId, id);
            }
            playerOpp.areaDeck.PushCard(card);
            playerOpp.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.manager.Get2ClientMessageMgr().ClientShow(playerOpp, DtMessageData_1.ClientShowType.CardEffect, [card.uid], "");
            this.manager.Get2ClientMessageMgr().ClientShow(playerOpp, DtMessageData_1.ClientShowType.CardEffectOver, [card.uid], "");
            this.manager.OnUseCard(null, playerOpp, card, false, true, DtMessageData_1.DtProtoEnum_MoveReason.PlayCard);
        }
        if (str == "playcard2") {
            let playerOpp = player.GetOppPlayer();
            let cards = playerOpp.areaHand.GetTheCopyCards();
            this.manager.OnUseCard(null, playerOpp, cards[Math.floor(cards.length / 2)], false, false, DtMessageData_1.DtProtoEnum_MoveReason.PlayCard);
        }
        if (str == "degself") {
            player.areaInBattle.ForeachCards((card) => {
                if (card.CanDegenerate(1)) {
                    this.manager.OnCardDegenerate(card, card, 1);
                }
            });
        }
        if (str == "ai") {
            let result = false;
            let waitid = this.manager.GetWaitPlayerId();
            if (waitid != null && playerid.equals(waitid)) {
                if (this.manager.IsClear() == false) {
                    result = this.RunSimpleAI();
                }
            }
            else {
                if (params[0] == "force") {
                    if (this.manager.IsClear() == false) {
                        result = this.RunSimpleAI();
                    }
                }
            }
            if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.Init) {
                this.manager.OnPlayerGameEvent(playerid, 1);
            }
            if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.StartBattle) {
                this.manager.OnPlayerChooseOne(playerid, Long_1.Long.fromNumber(0));
                result = true;
            }
            if (result) {
                this.UpdateGameBattleInfo();
            }
            return result;
        }
        if (str == "oppchangeifcancel") {
            player.GetOppPlayer().roundData.startChangeCardState = 0;
        }
        if (str == "oppchangeifok") {
            player.GetOppPlayer().roundData.startChangeCardState = 1;
        }
        if (str == "re2") {
            this.manager.OnRestore(null, player, 2);
        }
        if (str == "def") {
            this.manager.OnDrawCardFromDefense(null, player, player.areaDefense.GetTopCard(), DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (str == "defop") {
            this.manager.OnDrawCardFromDefense(null, player.GetOppPlayer(), player.GetOppPlayer().areaDefense.GetTopCard(), DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (str == "timeout") {
            this.manager.playerTimeOut.GMResetCurrentTime(15);
        }
        if (str == "addtime") {
            this.manager.playerTimeOut.GMResetCurrentTime(9999);
        }
        if (str == "def_play") {
            let opp = player.GetOppPlayer();
            opp.areaDefense.ForeachCards((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    this.manager.OnUseCard(card, opp, card, false, false, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
            });
        }
        if (str == "immtimeout") {
            this.manager.playerTimeOut.GMResetCurrentTime(-1);
            this.manager.RunTimeOut();
        }
        if (str == "full") {
            let id = 115001;
            let str = "";
            for (let i = 0; i < 10; i++) {
                str = str + (id + i).toString() + ",";
            }
            str = str + "118053";
            this.SetCard(player.playerId, "0|1|" + str);
            this.SetCard(player.GetOppPlayer().playerId, "0|1|" + str);
            id = 116011;
            for (let i = 0; i < 10; i++) {
                player.CreateCardOutDeck(id + i);
            }
            id = 116050;
            for (let i = 0; i < 10; i++) {
                player.GetOppPlayer().CreateCardOutDeck(id + i);
            }
        }
        if (str == "hengopp") {
            let cards = player.GetOppPlayer().areaInBattle.GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                this.manager.OnSetCardResetState(null, cards[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
        if (str == "soself") {
            if (params.length == 2) {
                let p = player;
                let bcard = this.GetBattleCard(p, params[0]);
                let id = this.GetCardId(params[1]);
                if (id != 0 && bcard) {
                    let card = new DtCard_1.DtCard(p, this.testId, id);
                    p.areaDeck.PushCard(card);
                    p.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    this.manager.OnCardSetToEvo(card, bcard, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
            }
        }
        if (str == "soopp") {
            if (params.length == 2) {
                let p = player.GetOppPlayer();
                let bcard = this.GetBattleCard(p, params[0]);
                let id = this.GetCardId(params[1]);
                if (id != 0 && bcard) {
                    let card = new DtCard_1.DtCard(p, this.testId, id);
                    p.areaDeck.PushCard(card);
                    p.MoveCard(card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    this.manager.OnCardSetToEvo(card, bcard, card, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
            }
        }
        if (str == "discardori") {
            if (params.length == 1) {
                let bcard = this.GetBattleCard(player, params[0]);
                if (bcard) {
                    let count = bcard.GetOriginDigimonCount();
                    for (let i = 0; i < count; i++) {
                        this.manager.OnCardDiscardEvoOriginWhere(bcard, bcard, 0, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                    }
                }
            }
        }
        if (str == "nocost") {
            if (this.manager.RoomTypeIs(DtMessageData_1.DtRoomType.NoCost) == false) {
                this.manager.roomData.type = this.manager.roomData.type | DtMessageData_1.DtRoomType.NoCost;
            }
        }
        if (str == "destroyall") {
            player.areaInBattle.ForeachCards((card) => {
                this.manager.OnCardDestroy(card, card, false);
            });
            player.GetOppPlayer().areaInBattle.ForeachCards((card) => {
                this.manager.OnCardDestroy(card, card, false);
            });
        }
        this.UpdateGameBattleInfo();
        return true;
    }
    SimpleEvo(evoCard, oriCard) {
        evoCard.ResetState();
        evoCard.cardBattleState = oriCard.cardBattleState;
        evoCard.cardSummonRound = oriCard.cardSummonRound;
        evoCard.GetPlayer().CardEvo(evoCard, oriCard);
        evoCard.SetCardEvoOriginSkill();
        evoCard.SetInheritBuff(oriCard.PopInheritBuff());
        evoCard.UpdateInheritEffectData(oriCard.effects);
        evoCard.UpdateInheritEffectDataWithOriCreator(oriCard.originEffect);
        evoCard.SetInheritEffect(oriCard.PopInheritEffects());
    }
    GetBattleCard(player, number) {
        number = number.toUpperCase();
        let cards = player.areaInBattle.GetTheCopyCards();
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].config.card_number == number) {
                return cards[i];
            }
        }
        return null;
    }
    UpdateGameBattleInfo() {
        this.manager.UpdateGameBattleInfo();
    }
    GetCardId(str) {
        if (str == null || str == "") {
            return 0;
        }
        if (Number(str)) {
            return Number(str);
        }
        return _Dcg_1.gCfg.card_basic.GetIdWithCardNumber(str);
    }
    RunSimpleAI() {
        if (this.manager.reconnectData != null) {
            if (this.manager.reconnectData.PlayerChoose != null) {
                this.ExecutePlayerChooseAI();
                return true;
            }
            if (this.manager.reconnectData.PlayerDefenseSelect != null) {
                this.ExecuteDefenseSelectAI();
                return true;
            }
            if (this.manager.reconnectData.PlayerSelectOptions != null) {
                this.ExecuteSelectOptionAI();
                return true;
            }
            if (this.manager.reconnectData.PlayerSelectEffectActivate != null) {
                this.ExecutePlayerSelectActivateAI();
                return true;
            }
        }
        if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.FosterPhase) {
            this.ExecutePhaseForsterAI();
            return true;
        }
        if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.MainPhase) {
            this.ExecuteMainAI();
            return true;
        }
        return false;
    }
    ExecutePhaseForsterAI() {
        let playerId = this.manager.CurPlayerID;
        let player = this.manager.GetPlayer(playerId);
        let hatchCard = player.areaDigitama.hatchedCard;
        if (player.areaDigitama.hatchedCard == null && player.areaDigitama && player.areaDigitama.CardCount() > 0) {
            this.manager.OnPlayerHatchDigimon(playerId);
        }
        else if (hatchCard && hatchCard.config.dp != 0) {
            this.manager.OnDigimonCardPlay(playerId, hatchCard.uid, 0);
        }
        else {
            this.manager.OnPlayerSetNextTurn(playerId);
        }
    }
    ExecuteMainAI() {
        let playerId = this.manager.CurPlayerID;
        let player = this.manager.GetPlayer(playerId);
        let battleCards = player.areaInBattle.GetTheCopyCards();
        for (let i = 0; i < battleCards.length; i++) {
            if (battleCards[i].CanAttack() && battleCards[i].CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null, null)) {
                this.manager.OnDigimonAttackDefense(playerId, battleCards[i].uid);
                return;
            }
        }
        let handCards = player.areaHand.GetTheCopyCards();
        for (let i = 0; i < handCards.length; i++) {
            let card = handCards[i];
            if (player.areaDigitama.hatchedCard) {
                if (card.CheckCanEvo(player.areaDigitama.hatchedCard).resultCost > 0) {
                    this.manager.OnDigimonEvo(playerId, card.uid, player.areaDigitama.hatchedCard.uid, 0);
                    return;
                }
            }
            for (let j = 0; j < battleCards.length; j++) {
                let batOriCard = battleCards[j];
                if (card.CheckCanEvo(batOriCard).resultCost > 0) {
                    this.manager.OnDigimonEvo(playerId, card.uid, batOriCard.uid, 0);
                    return;
                }
            }
        }
        for (let i = 0; i < handCards.length; i++) {
            let card = handCards[i];
            if (card.CardCanUse()) {
                if (this.manager.CurCost - card.GetPrecalculateLastCost(card.whereAreaType) < -10) {
                }
                else {
                    this.manager.OnDigimonCardPlay(playerId, card.uid, 0);
                    return;
                }
            }
        }
        this.manager.OnPlayerSetNextTurn(playerId);
    }
    ExecutePlayerChooseAI() {
        let checkCard = this.manager.reconnectData.PlayerChoose.CheckCards;
        let pChoose = this.manager.reconnectData.PlayerChoose;
        let playerId = this.manager.GetWaitPlayerId();
        let pids = new Array();
        switch (pChoose.Compare) {
            case protoMsg_1.DcgProto.E_COMPARE.C_EQUAL_CARD_COUNT:
                if (pChoose.ChooseNums == 1) {
                    if (checkCard && checkCard.length > 0) {
                        this.manager.OnPlayerChooseOne(playerId, checkCard[0].CardIID);
                    }
                    else {
                        this.manager.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
                    }
                }
                else {
                    for (let i = 0; i < pChoose.ChooseNums; i++) {
                        if (checkCard[i]) {
                            pids.push(checkCard[i].CardIID);
                        }
                    }
                    this.manager.OnPlayerChooseMul(playerId, pids);
                }
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_SORT:
                for (let i = 0; i < checkCard.length; i++) {
                    pids.push(checkCard[i].CardIID);
                }
                this.manager.OnPlayerChooseMul(playerId, pids);
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_LESS_THAN_OR_EQUAL:
                for (let i = 0; i < pChoose.ChooseNums; i++) {
                    if (checkCard[i]) {
                        pids.push(checkCard[i].CardIID);
                    }
                }
                this.manager.OnPlayerChooseMul(playerId, pids);
                break;
            case protoMsg_1.DcgProto.E_COMPARE.GREATE_EQUAL:
                for (let i = 0; i < pChoose.ChooseNums; i++) {
                    if (checkCard[i]) {
                        pids.push(checkCard[i].CardIID);
                    }
                }
                this.manager.OnPlayerChooseMul(playerId, pids);
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_OVER_ATTACK:
                if (checkCard && checkCard.length > 0) {
                    this.manager.OnPlayerChooseOne(playerId, checkCard[0].CardIID);
                }
                else {
                    this.manager.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
                }
                break;
        }
    }
    ExecuteDefenseSelectAI() {
        let playerId = this.manager.GetWaitPlayerId();
        this.manager.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
    }
    ExecuteSelectOptionAI() {
        let playerId = this.manager.GetWaitPlayerId();
        this.manager.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
    }
    ExecutePlayerSelectActivateAI() {
        let playerId = this.manager.GetWaitPlayerId();
        this.manager.OnPlayerChooseEffectActivateSortOrCancel(playerId, [1], null);
    }
}
exports.DtGM = DtGM;
//# sourceMappingURL=DtGM.js.map