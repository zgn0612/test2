"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBattleManager = void 0;
const Long_1 = require("../../cmn/proto/Long");
const protoMsg_1 = require("../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../cmn/_Dcg");
const DtCard_1 = require("./Card/DtCard");
const DtEffectType_1 = require("./Card/Effect/DtEffectType");
const DtGlobalBuffMgr_1 = require("./Card/GlobalBuff/DtGlobalBuffMgr");
const DtEnum_1 = require("./Data/DtEnum");
const DtEventMsg_1 = require("./Data/DtEventMsg");
const DtEvent_1 = require("./DtEvent");
const DtGM_1 = require("./DtGM");
const DtPlayerTimer_1 = require("./DtPlayerTimer");
const DtRandom_1 = require("./DtRandom");
const DtTriggerEffectWithMsg_1 = require("./DtTriggerEffectWithMsg");
const DtFsmAttack_1 = require("./Fsm/Attack/DtFsmAttack");
const DtFsmAttackEnum_1 = require("./Fsm/Attack/DtFsmAttackEnum");
const DtFsmAttack_WhenAttackingEffect_1 = require("./Fsm/Attack/States/DtFsmAttack_WhenAttackingEffect");
const DtFsmGameMain_1 = require("./Fsm/Main/DtFsmGameMain");
const DtcgMessage2Client_1 = require("./Message/DtcgMessage2Client");
const DtMessageData_1 = require("./Message/DtMessageData");
const DtPlayer_1 = require("./Player/DtPlayer");
const DtSystemChian_1 = require("./System/DtSystemChian");
class DtBattleManager {
    roomId;
    roomData;
    whileWaitPlayer = false;
    waitPlayerId;
    listTriggerEffect;
    systemChian;
    fsmAttack;
    fsmGameMain;
    event;
    globalBuffMgr;
    reconnectData;
    reconnectBrowse;
    messageManager;
    playerTimeOut;
    Random;
    InitBattle(data) {
        if (data == null) {
            this.event = new DtEvent_1.DtEvent();
            this.fsmGameMain = new DtFsmGameMain_1.DtFsmGameMain(this);
            return;
        }
        this.Random = new DtRandom_1.DtRandom(data.seed);
        this.roomId = data.roomId;
        this.roomData = data;
        this.listTriggerEffect = new Array();
        this.fsmAttack = new DtFsmAttack_1.DtFsmAttack(this);
        this.event = new DtEvent_1.DtEvent();
        this.fsmGameMain = new DtFsmGameMain_1.DtFsmGameMain(this);
        this.systemChian = new DtSystemChian_1.DtSystemChian(this);
        this.globalBuffMgr = new DtGlobalBuffMgr_1.DtGlobalBuffMgr(this);
        this.messageManager = new DtcgMessage2Client_1.DtcgMessage2Client(this);
        this.playerTimeOut = new DtPlayerTimer_1.DtPlayerTimer(this);
        this.fsmGameMain.curRound = data.round;
        if (data.actionPlayerId) {
            if (data.actionPlayerId.equals(this.roomData.room.FightRoleA.OtherRole.InstanceId)) {
                this.fsmGameMain.curTrunPlayerId = data.actionPlayerId;
            }
            if (data.actionPlayerId.equals(this.roomData.room.FightRoleB.OtherRole.InstanceId)) {
                this.fsmGameMain.curTrunPlayerId = data.actionPlayerId;
            }
        }
        this.fsmGameMain.curCost = data.cost;
    }
    RoomTypeIs(type) {
        return (this.roomData.type & type) > 0;
    }
    PlayerBattleCardsReLimit(player) {
        if (this.RoomTypeIs(DtMessageData_1.DtRoomType.BATTLE_CARD_LIMIT)) {
            return this.roomData.battleCardLimit - player.areaInBattle.CardCount();
        }
        return 100;
    }
    get CurRound() {
        return this.fsmGameMain.curRound;
    }
    get CurPlayerID() {
        return this.fsmGameMain.curTrunPlayerId;
    }
    get CurOppPlayerID() {
        return this.GetOppPlayer(this.CurPlayerID).playerId;
    }
    get CurCost() {
        return this.fsmGameMain.curCost;
    }
    IsCurrentPlayer(playerId) {
        return this.CurPlayerID.equals(playerId);
    }
    GetPlayer(uId) {
        return this.fsmGameMain.GetPlayer(uId);
    }
    GetOppPlayer(uId) {
        return this.fsmGameMain.GetOppPlayer(uId);
    }
    GetCurrentWaitPlayer() {
        if (this.waitPlayerId) {
            return this.GetPlayer(this.waitPlayerId);
        }
        return this.GetPlayer(this.CurPlayerID);
    }
    GetCurrentPahse() {
        return this.fsmGameMain.GetGameCurrentPhase();
    }
    GetAllPlayer() {
        return this.fsmGameMain.playerList;
    }
    GetWaitPlayerId() {
        return this.waitPlayerId;
    }
    SetGameWaitPlayer(playerId, reconnectData) {
        this.waitPlayerId = this.CurPlayerID;
        if (this.reconnectData != null) {
            this.waitPlayerId = this.GetCurrentReconnectPlayerId();
        }
        if (playerId) {
            this.waitPlayerId = playerId;
        }
        if (reconnectData) {
            this.reconnectData = reconnectData;
        }
        this.whileWaitPlayer = true;
        _Dcg_1.gLog.sys("Wait for player!!!!");
        this.UpdateGameBattleInfo();
        if (this.GetCurrentPahse() != DtEnum_1.DtBattlePhase.StartBattle && this.GetCurrentPahse() != DtEnum_1.DtBattlePhase.Init) {
            if (this.playerTimeOut.isInAutoSkip == false) {
                this.playerTimeOut.StartPlayerRoundTimeOut(this.GetPlayer(this.waitPlayerId));
            }
            else {
                if (this.playerTimeOut.IsElapsedPlayerId(this.waitPlayerId) == false) {
                    this.playerTimeOut.StartPlayerRoundTimeOut(this.GetPlayer(this.waitPlayerId));
                }
            }
        }
        this.Get2ClientMessageMgr().UpdateBattleDetail(this.waitPlayerId, this.fsmGameMain.playerList[0], this.fsmGameMain.playerList[1]);
    }
    DirectWaitSystem() {
        this.whileWaitPlayer = true;
    }
    GetCurrentReconnectPlayerId() {
        if (this.reconnectData.PlayerChoose != null) {
            return this.reconnectData.PlayerChoose.PlayerIID;
        }
        if (this.reconnectData.PlayerDefenseSelect != null) {
            return this.reconnectData.PlayerDefenseSelect.PlayerIID;
        }
        if (this.reconnectData.PlayerSelectOptions != null) {
            return this.reconnectData.PlayerSelectOptions.PlayerIID;
        }
        if (this.reconnectData.PlayerSelectEffectActivate != null) {
            return this.reconnectData.PlayerSelectEffectActivate.PlayerIID;
        }
    }
    UpdateGameBattleInfo() {
        this.FireListener(DtEvent_1.DtEventType.BattleFieldInfoChange, null);
        this.globalBuffMgr.CheckUnusedGlobalBuff();
        this.CheckCardUnusedBuffAndEffect();
        this.Get2ClientMessageMgr().UpdateGameBattleCardInfo(this.fsmGameMain.playerList[0], this.fsmGameMain.playerList[1]);
    }
    CheckCardUnusedBuffAndEffect() {
        for (let i = 0; i < this.fsmGameMain.playerList.length; i++) {
            let battleArea = this.fsmGameMain.playerList[i].GetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
            battleArea.ForeachCards((card) => {
                card.RemoveUnusedOfferBuff();
            });
        }
    }
    CheckBattlefieldDigimon() {
        this.CheckCardUnusedBuffAndEffect();
        let fieldUpdate = false;
        for (let i = 0; i < this.fsmGameMain.playerList.length; i++) {
            let battleArea = this.fsmGameMain.playerList[i].GetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
            let isNeedUpdate = battleArea.CheckWithCondition((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.DigiTama)) {
                    if (card.config.dp == 0 && card.CardInActionEffect(DtEnum_1.DtActionEffectType.CardCannotInBattle) == false) {
                        return true;
                    }
                    else if (card.GetLastDP() <= 0 && card.CardInActionEffect(DtEnum_1.DtActionEffectType.AtkZeroDestroy) == false) {
                        return true;
                    }
                }
                return false;
            });
            if (isNeedUpdate) {
                fieldUpdate = true;
                break;
            }
        }
        if (fieldUpdate) {
            let card = this.fsmGameMain.refereePlayer.areaInBattle.GetCard(Long_1.Long.fromNumber(-10000));
            if (card) {
                card.CheckCardEffect(DtEffectType_1.DtEffectType.RefreeCheckBattle);
            }
            else {
                _Dcg_1.gLog.err("no referee card");
            }
        }
        return fieldUpdate;
    }
    Run() {
        let runCount = 0;
        this.whileWaitPlayer = false;
        while (!this.whileWaitPlayer && this.IsClear() == false) {
            runCount++;
            if (runCount > 2000) {
                this.LogicTick(true);
                return false;
            }
            this.LogicTick();
        }
        return true;
    }
    ImmediatelyCreateCurrentNewChain() {
        if (this.listTriggerEffect.length > 0) {
            this.systemChian.SetCardsActiveEffect(this.listTriggerEffect);
            this.listTriggerEffect.length = 0;
        }
        this.systemChian.ImmediatelyCreateNewChain();
    }
    SetFunc(func) {
        this.systemChian.SetChainFunc(func);
    }
    LogicTick(showlog = false) {
        if (showlog) {
            _Dcg_1.gLog.err("[LogicTick] =============================================================================== start");
        }
        if (this.listTriggerEffect.length > 0) {
            this.systemChian.SetCardsActiveEffect(this.listTriggerEffect);
            this.listTriggerEffect.length = 0;
            return;
        }
        if (this.systemChian.IsRunning()) {
            if (showlog) {
                _Dcg_1.gLog.err("[LogicTick] this.systemChian.IsRunning()");
            }
            this.systemChian.OnTick(showlog);
            return;
        }
        if (this.fsmAttack.IsRunning()) {
            if (showlog) {
                _Dcg_1.gLog.err("[LogicTick] this.fsmAttack.IsRunning()");
            }
            this.fsmAttack.OnTick();
            if (showlog) {
                this.fsmAttack.ShowLog();
            }
            return;
        }
        if (this.CheckBattlefieldDigimon()) {
            if (showlog) {
                _Dcg_1.gLog.err("[LogicTick] CheckBattlefieldDigimon");
            }
            return;
        }
        if (showlog) {
            _Dcg_1.gLog.err("[LogicTick] this.fsmGameMain.OnTick()");
        }
        this.fsmGameMain.OnTick();
        if (showlog) {
            this.fsmGameMain.ShowLog();
        }
        if (this.IsClear()) {
            return;
        }
        for (let i = 0; i < this.fsmGameMain.playerList.length; i++) {
            this.fsmGameMain.playerList[i].areaGraveyard.ForeachCards((card) => { card.ResetState(); });
            this.fsmGameMain.playerList[i].areaHand.ForeachCards((card) => { card.ResetState(); });
            this.fsmGameMain.playerList[i].areaDeck.ForeachCards((card) => { card.ResetState(); });
            this.fsmGameMain.playerList[i].areaDefense.ForeachCards((card) => { card.ResetState(); });
            this.fsmGameMain.playerList[i].areaDigitama.ForeachCards((card) => { card.ResetState(); });
        }
        if (showlog) {
            _Dcg_1.gLog.err("[LogicTick] =============================================================================== end");
        }
    }
    CheckGameLogicIsFree() {
        if (this.fsmAttack.IsRunning()) {
            return false;
        }
        if (this.systemChian.IsRunning()) {
            return false;
        }
        return true;
    }
    CheckFsmAttackIsFree() {
        if (this.fsmAttack.IsRunning()) {
            return false;
        }
        return true;
    }
    NotifiClientBattleState(state) {
        this.Get2ClientMessageMgr().SetBattleStateMessage(this.GetPlayer(this.CurPlayerID), state, this.CurRound);
    }
    SetEffectTrigger(trigger, msg) {
        if (trigger != null) {
            this.listTriggerEffect.push(new DtTriggerEffectWithMsg_1.DtTriggerEffectWithMsg(trigger, msg));
        }
    }
    SetCost(cost, needCheckTurnover = false) {
        this.fsmGameMain.SetCost(cost, needCheckTurnover);
        this.Get2ClientMessageMgr().DigimonSetCost(this.CurCost);
    }
    ChangeReduceCost(caster, change, reason) {
        let msg = new DtEventMsg_1.DtMsg_ChangeCost(caster, change, reason);
        this.FireListener(DtEvent_1.DtEventType.BeforeCardChangeCost, msg);
        if (this.IsCurrentPlayer(caster.parent.playerId) == false) {
            msg.cost = -msg.cost;
        }
        if (this.RoomTypeIs(DtMessageData_1.DtRoomType.NoCost)) {
            msg.cost = 0;
        }
        this.fsmGameMain.UseCost(msg.cost);
        this.Get2ClientMessageMgr().DigimonSetCost(this.CurCost);
    }
    OnPlayerHatchDigimon(playerId) {
        if (this.CheckGameLogicIsFree() == false) {
            return false;
        }
        if (this.fsmGameMain.CheckPlayerCanHatch(playerId)) {
            let player = this.GetPlayer(playerId);
            player.HatchDigitama();
            this.fsmGameMain.SetNextState();
            return true;
        }
        return false;
    }
    EffectHatchDigimon(player) {
        player.HatchDigitama();
    }
    OnDigimonCardPlay(playerId, carduid, index) {
        if (this.fsmGameMain.CheckPlayerCanPlayCard(playerId) == false) {
            return false;
        }
        if (this.CheckGameLogicIsFree() == false) {
            return false;
        }
        if (this.fsmGameMain.GetGameCurrentPhase() == DtEnum_1.DtBattlePhase.MainPhase) {
            let player = this.GetPlayer(playerId);
            let check = player.areaHand.GetCard(carduid);
            if (check == null) {
                return false;
            }
            if (this.RoomTypeIs(DtMessageData_1.DtRoomType.NoCost) == false) {
                if (this.CurCost - check.GetPrecalculateLastCost(check.whereAreaType) < -10) {
                    return false;
                }
            }
            if (check.CardTypeIs(DtEnum_1.DtCardType.Monster) || check.CardTypeIs(DtEnum_1.DtCardType.Role) || check.CardTypeIs(DtEnum_1.DtCardType.DigiTama)) {
                if (player.areaInBattle.CanAddCard() == false) {
                    return false;
                }
            }
            if (check.CardCanUse()) {
                let fsmPlay = this.systemChian.SetPlayerUseCard(null, player, check, true, true, DtMessageData_1.DtProtoEnum_MoveReason.PlayToBattle);
                fsmPlay.cardPlayIndex = index;
                return true;
            }
        }
        else if (this.fsmGameMain.GetGameCurrentPhase() == DtEnum_1.DtBattlePhase.FosterPhase) {
            let player = this.GetPlayer(playerId);
            let card = player.HatchGoBattle(carduid, index);
            if (card == null) {
                return false;
            }
            card.OnInBattleArea();
            this.fsmGameMain.SetNextState();
            return true;
        }
        return false;
    }
    EffectHatchGoBattle(player) {
        let hatchCard = player.areaDigitama.hatchedCard;
        if (hatchCard && hatchCard.config.dp != 0) {
            let card = player.HatchGoBattle(hatchCard.uid, -1);
            if (card) {
                card.OnInBattleArea();
            }
        }
    }
    OnUseCard(caster, player, card, useCost, OnEffect = true, reason = DtMessageData_1.DtProtoEnum_MoveReason.EffectToBattle) {
        if (card.whereAreaType == DtEnum_1.DtAreaType.OTHER_EVO) {
            _Dcg_1.gLog.err("can not play card direct from evo  use OnCardPlayFromOrigin replace   :==>" + caster.GetCardConfigForceName());
            return null;
        }
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.Role) || card.CardTypeIs(DtEnum_1.DtCardType.DigiTama)) {
            if (card.parent.areaInBattle.CanAddCard() == false) {
                return null;
            }
        }
        if (card.parent.roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_EFFECT_PLAY_MONSTER) && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return null;
        }
        let fsmPlay = this.systemChian.SetPlayerUseCard(caster, player, card, useCost, OnEffect, reason);
        return fsmPlay;
    }
    OnCardDestroy(casterCard, receiveCard, OnEffect = true) {
        return this.systemChian.SetCardFsmActionEffect(null, casterCard, receiveCard, DtEnum_1.DtActionEffectType.EffectDestroy, OnEffect ? 1 : 0);
    }
    OnCardAtkZeroDestroy(casterCard, receiveCard, OnEffect = true) {
        this.systemChian.SetCardFsmActionEffect(null, casterCard, receiveCard, DtEnum_1.DtActionEffectType.AtkZeroDestroy, OnEffect ? 1 : 0);
    }
    OnCardCannotInBattleDestroy(casterCard, receiveCard, OnEffect = true) {
        this.systemChian.SetCardFsmActionEffect(null, casterCard, receiveCard, DtEnum_1.DtActionEffectType.CardCannotInBattle, OnEffect ? 1 : 0);
    }
    OnCardAttackDestroy(casterCard, receiveCard, OnEffect = true) {
        return this.systemChian.SetCardFsmActionEffect(null, casterCard, receiveCard, DtEnum_1.DtActionEffectType.AttackDestroy, OnEffect ? 1 : 0);
    }
    OnCardReturnTo(casterCard, receiveCard, type = DtEnum_1.DtActionEffectType.BattleReturnHand, param = 0) {
        return this.systemChian.SetCardFsmActionEffect(null, casterCard, receiveCard, type, param);
    }
    OnCardDegenerate(casterCard, receiveCard, param = 1) {
        return this.systemChian.SetCardFsmActionEffect(null, casterCard, receiveCard, DtEnum_1.DtActionEffectType.Degenerate, param);
    }
    OnCardArmorPurge(casterCard, receiveCard, degType) {
        let degCard = receiveCard.parent.CardArmorPurge(casterCard, receiveCard, degType);
        let save = degCard.evoOriginPrevCardUId;
        degCard.ResetState();
        degCard.evoOriginPrevCardUId = save;
        degCard.CalculateDigimonOriginList();
        degCard.cardBattleState = receiveCard.cardBattleState;
        degCard.cardSummonRound = receiveCard.cardSummonRound;
        this.Get2ClientMessageMgr().UpdateCardDetails(degCard.parent, degCard);
        degCard.SetCardEvoOriginSkill();
        degCard.SetInheritBuff(receiveCard.PopInheritBuff());
        degCard.UpdateInheritEffectData(receiveCard.effects);
        degCard.SetInheritEffect(receiveCard.PopInheritEffects());
        degCard.OnInBattleArea();
        this.ChangeBattleCardInfo(receiveCard, degCard);
        receiveCard.ResetState();
        return degCard;
    }
    OnDrawCard(caster, drawCount, type) {
        let c = 0;
        for (let i = 0; i < drawCount; i++) {
            if (caster.parent.DrawCard(type)) {
                c++;
            }
        }
        return c;
    }
    OnDiscardDeckTopCard(caster, player, discardCount) {
        let c = 0;
        for (let i = 0; i < discardCount; i++) {
            let card = player.TopCardInDeck2GY();
            if (card) {
                c += 1;
                let msg = new DtEventMsg_1.DtMsg_CardMove(caster, card, DtEnum_1.DtAreaType.DECK, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.Discard);
                this.FireListener(DtEvent_1.DtEventType.CardMove, msg);
            }
        }
        return c;
    }
    OnCardMoveTo(caster, card, to, reason) {
        if (card.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA && caster != null) {
            _Dcg_1.gLog.err("can not use this function move card from battle with card effect !!!! ==>" + caster.GetCardConfigForceName());
            return;
        }
        if (card.whereAreaType == DtEnum_1.DtAreaType.OTHER_EVO && caster != null) {
            _Dcg_1.gLog.err("can not use this function move card from digievo with card effect !!!! ==>" + caster.GetCardConfigForceName());
            return;
        }
        let msg = new DtEventMsg_1.DtMsg_CardMove(caster, card, card.whereAreaType, to, reason);
        card.parent.CardMoveTo(card, to, reason);
        this.FireListener(DtEvent_1.DtEventType.CardMove, msg);
    }
    OnCardMoveToBottom(caster, card, to, reason) {
        if (card.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA && caster != null) {
            _Dcg_1.gLog.err("can not use this function move card from battle with card effect !!!! ==>" + caster.GetCardConfigForceName());
            return;
        }
        if (card.whereAreaType == DtEnum_1.DtAreaType.OTHER_EVO && caster != null) {
            _Dcg_1.gLog.err("can not use this function move card from digievo with card effect !!!! ==>" + caster.GetCardConfigForceName());
            return;
        }
        card.parent.CardMoveToBottom(card, to, reason);
    }
    OnCardDelayUse(caster, card, to, reason) {
        let msg = new DtEventMsg_1.DtMsg_CardMove(caster, card, card.whereAreaType, to, reason);
        card.parent.CardMoveTo(card, to, reason);
        this.FireListener(DtEvent_1.DtEventType.CardMove, msg);
    }
    OnMagicMoveToBattle(caster, card) {
        if (card.parent.areaInBattle.CanAddCard() == false) {
            return;
        }
        card.parent.DigimonEffectGoBattle(card, -1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
    }
    OnRestore(caster, player, count) {
        for (let i = 0; i < count; i++) {
            player.Restore();
        }
    }
    OnDiscardDefenseCard(caster, player, count, reason) {
        for (let i = 0; i < count; i++) {
            player.DiscardDefense();
        }
    }
    OnDrawDefenseCard(caster, player, count, reason) {
        for (let i = 0; i < count; i++) {
            let card = player.areaDefense.GetTopCard();
            if (card) {
                this.OnCardMoveTo(caster, card, DtEnum_1.DtAreaType.HAND, reason);
            }
        }
    }
    OnDrawCardFromDefense(caster, player, card, reason) {
        player.DrawCardFromDefense(caster, card, reason);
    }
    OnCardSetToEvo(caster, battlecard, placeCard, where, reason) {
        let action = this.systemChian.SetCardFsmActionEffect(null, caster, placeCard, DtEnum_1.DtActionEffectType.PlaceCardUnderOtherDigimon, where);
        action.extraOtherCard = battlecard;
        return action;
    }
    OnCardDiscardEvoOriginWhere(caster, card, where, reason) {
        if (card.CheckIsImmueEffect(caster)) {
            return false;
        }
        let evoOriCards = card.GetOriginDigimonList();
        if (evoOriCards.length == 0) {
            return;
        }
        let discard;
        if (where == 1) {
            discard = evoOriCards[0];
        }
        else if (where == 0) {
            discard = evoOriCards[evoOriCards.length - 1];
        }
        card.parent.CardDiscardEvoOrigin(card, discard, DtEnum_1.DtAreaType.GY);
        this.FireListener(DtEvent_1.DtEventType.OnDiscardEvoOrigin, new DtEventMsg_1.DtMsg_CardBeDiscardFromEvoOri(discard, card, reason, caster));
        return true;
    }
    OnCardDiscardEvoOriginCard(caster, card, discard, reason) {
        if (card.CheckIsImmueEffect(caster)) {
            return false;
        }
        let evoOriCards = card.GetOriginDigimonList();
        if (evoOriCards.length == 0) {
            return;
        }
        card.parent.CardDiscardEvoOrigin(card, discard, DtEnum_1.DtAreaType.GY);
        this.FireListener(DtEvent_1.DtEventType.OnDiscardEvoOrigin, new DtEventMsg_1.DtMsg_CardBeDiscardFromEvoOri(discard, card, reason, caster));
    }
    OnCardDiscardEvoOriginCardToHand(caster, card, discard, reason) {
        if (card.CheckIsImmueEffect(caster)) {
            return false;
        }
        let evoOriCards = card.GetOriginDigimonList();
        if (evoOriCards.length == 0) {
            return;
        }
        card.parent.CardDiscardEvoOrigin(card, discard, DtEnum_1.DtAreaType.HAND);
        this.FireListener(DtEvent_1.DtEventType.OnDiscardEvoOrigin, new DtEventMsg_1.DtMsg_CardBeDiscardFromEvoOri(discard, card, reason, caster));
    }
    OnCardDiscardEvoOriginCardToDeckBottom(caster, card, discard, reason) {
        if (card.CheckIsImmueEffect(caster)) {
            return false;
        }
        let evoOriCards = card.GetOriginDigimonList();
        if (evoOriCards.length == 0) {
            return;
        }
        card.parent.CardDiscardEvoOrigin(card, discard, DtEnum_1.DtAreaType.DECK, false);
        this.FireListener(DtEvent_1.DtEventType.OnDiscardEvoOrigin, new DtEventMsg_1.DtMsg_CardBeDiscardFromEvoOri(discard, card, reason, caster));
    }
    OnCardPlayFromOrigin(caster, card, originCard, useCost, OnEffect) {
        if (card.CheckIsImmueEffect(caster)) {
            return null;
        }
        if (card.parent.roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_EFFECT_PLAY_MONSTER)) {
            return null;
        }
        if (card.parent.areaInBattle.CanAddCard() == false) {
            return;
        }
        let evoOriCards = card.GetOriginDigimonList();
        if (evoOriCards.length == 0) {
            return null;
        }
        let success = card.parent.PopCardFromCardEvo(card, originCard);
        if (success) {
            this.FireListener(DtEvent_1.DtEventType.OnDiscardEvoOrigin, new DtEventMsg_1.DtMsg_CardBeDiscardFromEvoOri(originCard, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect, caster));
            return this.systemChian.SetPlayerUseCard(caster, card.GetPlayer(), originCard, useCost, OnEffect, DtMessageData_1.DtProtoEnum_MoveReason.FromOriginToBattle);
        }
        return null;
    }
    OnSetCardActiveState(caster, card, reason) {
        if (card.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE)) {
            return null;
        }
        if (card.cardBattleState != DtEnum_1.DtCardBattleState.Activate) {
            let effect = this.systemChian.SetCardFsmActionEffect(null, caster, card, DtEnum_1.DtActionEffectType.ChangeCardBattleState, DtEnum_1.DtCardBattleState.Activate);
            effect.reason = reason;
            return effect;
        }
        return null;
    }
    OnSetCardResetState(caster, card, reason) {
        if (card.cardBattleState != DtEnum_1.DtCardBattleState.Reset) {
            let effect = this.systemChian.SetCardFsmActionEffect(null, caster, card, DtEnum_1.DtActionEffectType.ChangeCardBattleState, DtEnum_1.DtCardBattleState.Reset);
            effect.reason = reason;
            return effect;
        }
        return null;
    }
    OnForceAttackChangeTarget(caster, card) {
        if (card.CheckIsImmueEffect(caster)) {
            return false;
        }
        if (this.fsmAttack.IsRunning()) {
            this.fsmAttack.ChangeAttackTarget(card);
        }
        return true;
    }
    OnForceAttackOver() {
        this.fsmAttack.AttackOver();
    }
    SkipDefenseAttackJudge() {
        this.fsmAttack.SkipDefenseAttackJudge();
    }
    OnPlayerSetNextTurn(playerId) {
        if (this.CurPlayerID.equals(playerId) == false) {
            return false;
        }
        if (this.CheckGameLogicIsFree() == false) {
            return false;
        }
        if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.MainPhase) {
            this.SetCost(-3);
            this.fsmGameMain.needCheckPlayerTurnOver = true;
        }
        else {
            this.fsmGameMain.SetNextState();
        }
        return true;
    }
    OnDigimonBattle(playerId, atkCardUID, defCardUID, isForceAttack = false) {
        if (isForceAttack == false) {
            if (this.fsmGameMain.CheckPlayerCanAttack(playerId) == false) {
                return false;
            }
            if (this.CheckGameLogicIsFree() == false) {
                return false;
            }
        }
        let atkCard = this.GetPlayer(playerId).areaInBattle.GetCard(atkCardUID);
        let defCard = this.GetOppPlayer(playerId).areaInBattle.GetCard(defCardUID);
        if (atkCard == null || defCard == null) {
            return false;
        }
        if (atkCard.CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, defCard) == false) {
            return false;
        }
        this.fsmAttack.SetAttack(this.GetPlayer(playerId), atkCard, defCard, DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack);
        return true;
    }
    OnDigimonAttackDefense(playerId, atkCardUID, isForceAttack = false) {
        if (isForceAttack == false) {
            if (this.fsmGameMain.CheckPlayerCanAttack(playerId) == false) {
                return false;
            }
            if (this.CheckGameLogicIsFree() == false) {
                return false;
            }
        }
        let atkCard = this.GetPlayer(playerId).areaInBattle.GetCard(atkCardUID);
        if (atkCard == null) {
            return false;
        }
        if (atkCard.CardCanAttack(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, null) == false) {
            return false;
        }
        this.fsmAttack.SetAttack(this.GetPlayer(playerId), atkCard, null, DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack);
        return true;
    }
    OnDigimonEffectBattle(player, atkCard, type, defCard) {
        this.fsmAttack.SetAttack(player, atkCard, defCard, type);
        let i = 0;
        while (true) {
            this.fsmAttack.OnTick();
            if (this.fsmAttack.GetNextState() == this.fsmAttack.GetState(DtFsmAttack_WhenAttackingEffect_1.DtFsmAttack_WhenAttackingEffect.name)) {
                break;
            }
            i++;
            if (i > 50) {
                break;
            }
        }
    }
    QuitGame(playerId) {
        if (this.fsmGameMain) {
            this.GameOver(this.GetPlayer(playerId).GetOppPlayer(), DtEnum_1.DtGameOverReason.QUIT_GAME);
        }
    }
    GameOver(player, reason) {
        this.Get2ClientMessageMgr().GameOver(player, reason);
        this.Clear();
    }
    OnDigimonEvo(playerId, evoMonsterUID, originUID, playerChooseCost) {
        if (this.CurPlayerID.equals(playerId) == false) {
            return false;
        }
        if (this.CheckGameLogicIsFree() == false) {
            return false;
        }
        let player = this.GetPlayer(playerId);
        let evoCard = player.areaHand.GetCard(evoMonsterUID);
        if (evoCard == null) {
            return false;
        }
        let originCard = null;
        if (player.areaDigitama.hatchedCard != null && player.areaDigitama.hatchedCard.UidEquals(originUID)) {
            originCard = player.areaDigitama.hatchedCard;
        }
        else {
            originCard = player.areaInBattle.GetCard(originUID);
        }
        if (originCard == null) {
            return false;
        }
        if (originCard.isToken == true || evoCard.isToken == true) {
            return false;
        }
        let cost = evoCard.CheckCanEvo(originCard);
        if (cost.resultCost >= 0) {
            if (playerChooseCost != 0) {
                let result = evoCard.CheckCanPlayerChooseCostEvo(originCard, playerChooseCost);
                if (result) {
                    let evo = this.systemChian.SetEvo(player, evoCard, originCard, result.resultCost);
                    evo.evoBuff = result.buff;
                    return true;
                }
            }
            let evo = this.systemChian.SetEvo(player, evoCard, originCard, cost.resultCost);
            evo.evoBuff = cost.buff;
            return true;
        }
    }
    ForceDigimonEvo(player, evoCard, oriCard, cost) {
        let fsmevo = this.systemChian.SetEvo(player, evoCard, oriCard, cost);
        fsmevo.EvoOverCallBack = (fsm) => {
            this.ChangeBattleCardInfo(oriCard, evoCard);
            this.systemChian.UpdateTriggerEffectEvoCard(evoCard, oriCard);
        };
        return fsmevo;
    }
    ForceDigimonAttackEvo(player, evoCard, oriCard, cost, isnoCostEvo) {
        player.CardMoveTo(evoCard, DtEnum_1.DtAreaType.OTHER_EVO, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        let fsmEvo = this.systemChian.SetEvo(player, evoCard, oriCard, cost);
        if (isnoCostEvo) {
            fsmEvo.SetNoCost();
        }
        fsmEvo.EvoOverCallBack = (fsm) => {
            this.ChangeBattleCardInfo(oriCard, evoCard);
            this.systemChian.UpdateTriggerEffectEvoCard(evoCard, oriCard);
        };
        return fsmEvo;
    }
    ChangeBattleCardInfo(oricard, changeCard) {
        if (this.fsmAttack.IsRunning()) {
            if (this.fsmAttack.atkCard == oricard) {
                this.fsmAttack.atkCard = changeCard;
            }
            if (this.fsmAttack.defCard == oricard) {
                this.fsmAttack.ChangeAttackTarget(changeCard);
            }
        }
    }
    FusionEvolution(player, evoCard, topCard, bottomCard, cost) {
        this.systemChian.SetFusionEvolution(player, evoCard, topCard, bottomCard, cost);
    }
    OnPlayerChooseOne(playerId, uid, questId = -1) {
        if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.StartBattle) {
            let result = uid.toNumber();
            let player = this.GetPlayer(playerId);
            if (player.roundData.startChangeCardState == -1) {
                player.roundData.startChangeCardState = result;
            }
            let allPlayerChoose = true;
            this.fsmGameMain.playerList.forEach((p) => {
                if (p.roundData.startChangeCardState == -1) {
                    allPlayerChoose = false;
                }
            });
            return allPlayerChoose;
        }
        if (this.waitPlayerId == null) {
            return false;
        }
        if (this.waitPlayerId.equals(playerId) == false) {
            return false;
        }
        if (this.CheckQuestIdIsLegality(questId) == false) {
            return false;
        }
        if (this.CheckChooseOneIdIsLegality(uid) == false) {
            return false;
        }
        this.Get2ClientMessageMgr().ClientShow(this.GetPlayer(playerId), DtMessageData_1.ClientShowType.HasChooseCard, [uid], this.GetCurrentReconnectQuestid().toString());
        if (this.reconnectData) {
            if (this.reconnectData.PlayerDefenseSelect != null) {
                if (this.fsmAttack.IsDefenseSelectState()) {
                    this.fsmAttack.OnDefenseClick(uid);
                }
            }
            else {
                this.systemChian.OnPlayerChooseOne(uid);
            }
        }
        this.reconnectData = null;
        return true;
    }
    OnPlayerGameEvent(playerId, eventid) {
        if (eventid == DtEnum_1.DtPlayerGameEvent.GameInitOK) {
            let player = this.GetPlayer(playerId);
            if (player.roundData.clientGameEvent == 0) {
                player.roundData.clientGameEvent = eventid;
            }
            if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.Init) {
                let allPlayerEvent = true;
                this.fsmGameMain.playerList.forEach((p) => {
                    if (p.roundData.clientGameEvent == 0) {
                        allPlayerEvent = false;
                    }
                });
                return allPlayerEvent;
            }
        }
        else if (eventid == DtEnum_1.DtPlayerGameEvent.AnimationPlayOver) {
            if (this.RoomTypeIs(DtMessageData_1.DtRoomType.IsReplay)) {
                return false;
            }
            if (this.playerTimeOut.IsPause()) {
                this.playerTimeOut.PlayerAnimationPlayOver(this.GetPlayer(playerId));
            }
            return false;
        }
        return false;
    }
    OnPlayerChooseMul(playerId, uids, questId = -1) {
        if (this.waitPlayerId == null) {
            return false;
        }
        if (this.waitPlayerId.equals(playerId) == false) {
            return false;
        }
        if (this.CheckQuestIdIsLegality(questId) == false) {
            return false;
        }
        if (this.CheckChooseMulIdIsLegality(uids) == false) {
            return false;
        }
        this.Get2ClientMessageMgr().ClientShow(this.GetPlayer(playerId), DtMessageData_1.ClientShowType.HasChooseCard, uids, this.GetCurrentReconnectQuestid().toString());
        this.systemChian.OnPlayerChooseMul(uids);
        this.reconnectData = null;
        return true;
    }
    OnPlayerChooseEffectActivateSortOrCancel(playerId, activates, cancels, questId = -1) {
        if (this.waitPlayerId == null) {
            return false;
        }
        if (this.waitPlayerId.equals(playerId) == false) {
            return false;
        }
        if (this.CheckQuestIdIsLegality(questId) == false) {
            return false;
        }
        if (this.reconnectData.PlayerSelectEffectActivate == null) {
            return false;
        }
        if (activates == null || activates.length == 0) {
            if (cancels == null || cancels.length == 0) {
                return false;
            }
        }
        if (activates && activates.length > 0) {
            for (let i = 0; i < activates.length; i++) {
                let choose = activates[i];
                if (this.CheckEffectActiveIndexLegal(choose, true) == false) {
                    return false;
                }
            }
        }
        if (cancels && cancels.length > 0) {
            for (let i = 0; i < cancels.length; i++) {
                let choose = cancels[i];
                if (choose != 0) {
                    if (this.CheckEffectActiveIndexLegal(choose, false) == false) {
                        return false;
                    }
                }
            }
        }
        this.Get2ClientMessageMgr().ClientShow(this.GetPlayer(playerId), DtMessageData_1.ClientShowType.HasChooseCard, null, this.GetCurrentReconnectQuestid().toString());
        this.systemChian.OnPlayerChooseEffectActivateSortOrCancel(activates, cancels);
        this.reconnectData = null;
        return true;
    }
    CheckEffectActiveIndexLegal(effIdx, isActive) {
        for (let j = 0; j < this.reconnectData.PlayerSelectEffectActivate.EffectActivate.length; j++) {
            let check = this.reconnectData.PlayerSelectEffectActivate.EffectActivate[j];
            if (check.EffectIndex == effIdx) {
                if (isActive == false) {
                    if (check.AskActivate == false) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
    CheckQuestIdIsLegality(questId) {
        if (questId == -1) {
            return true;
        }
        if (this.reconnectData == null) {
            _Dcg_1.gLog.err("no reconnect data???? why");
            return false;
        }
        if (this.reconnectData.PlayerChoose != null) {
            if (this.reconnectData.PlayerChoose.RequestId != questId) {
                return false;
            }
        }
        if (this.reconnectData.PlayerDefenseSelect != null) {
            if (this.reconnectData.PlayerDefenseSelect.RequestId != questId) {
                return false;
            }
        }
        if (this.reconnectData.PlayerSelectEffectActivate != null) {
            if (this.reconnectData.PlayerSelectEffectActivate.RequestId != questId) {
                return false;
            }
        }
        if (this.reconnectData.PlayerSelectOptions != null) {
            if (this.reconnectData.PlayerSelectOptions.RequestId != questId) {
                return false;
            }
        }
        return true;
    }
    GetCurrentReconnectQuestid() {
        if (this.reconnectData == null) {
            return -1;
        }
        if (this.reconnectData.PlayerChoose != null) {
            return this.reconnectData.PlayerChoose.RequestId;
        }
        if (this.reconnectData.PlayerDefenseSelect != null) {
            return this.reconnectData.PlayerDefenseSelect.RequestId;
        }
        if (this.reconnectData.PlayerSelectEffectActivate != null) {
            return this.reconnectData.PlayerSelectEffectActivate.RequestId;
        }
        if (this.reconnectData.PlayerSelectOptions != null) {
            return this.reconnectData.PlayerSelectOptions.RequestId;
        }
    }
    CheckChooseOneIdIsLegality(uid) {
        if (this.reconnectData == null) {
            _Dcg_1.gLog.err("no reconnect data???? why");
            return false;
        }
        if (this.reconnectData.PlayerChoose != null) {
            let choose = this.reconnectData.PlayerChoose;
            if (uid.toNumber() == 0 && choose.CanCancel) {
                return true;
            }
            if (uid.toNumber() == 0 && choose.Compare == protoMsg_1.DcgProto.E_COMPARE.C_OVER_ATTACK) {
                return true;
            }
            if (this.CheckCardUidIsInArray(choose.CheckCards, uid)) {
                return true;
            }
        }
        if (this.reconnectData.PlayerDefenseSelect != null) {
            let choose = this.reconnectData.PlayerDefenseSelect;
            if (uid.toNumber() == 0) {
                return true;
            }
            if (this.CheckCardUidIsInArray(choose.ChooseDefenseCards, uid)) {
                return true;
            }
        }
        if (this.reconnectData.PlayerSelectOptions != null) {
            let choose = this.reconnectData.PlayerSelectOptions;
            if (choose.Num > uid.toNumber()) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    CheckChooseMulIdIsLegality(uids) {
        if (this.reconnectData == null) {
            _Dcg_1.gLog.err("no reconnect data???? why");
            return false;
        }
        if (this.reconnectData.PlayerChoose != null) {
            let choose = this.reconnectData.PlayerChoose;
            for (let i = 0; i < uids.length; i++) {
                if (this.CheckCardUidIsInArray(choose.CheckCards, uids[i]) == false) {
                    return false;
                }
            }
            if (choose.Compare == protoMsg_1.DcgProto.E_COMPARE.C_SORT) {
                if (uids.length != choose.CheckCards.length) {
                    return false;
                }
            }
            else if (choose.Compare == protoMsg_1.DcgProto.E_COMPARE.C_EQUAL_CARD_COUNT) {
                if (uids.length != choose.ChooseNums) {
                    return false;
                }
            }
            else if (choose.Compare == protoMsg_1.DcgProto.E_COMPARE.C_LESS_THAN_OR_EQUAL) {
                if (uids.length > choose.ChooseNums || uids.length == 0) {
                    return false;
                }
            }
            else if (choose.Compare == protoMsg_1.DcgProto.E_COMPARE.GREATE_EQUAL) {
                if (uids.length < choose.ChooseNums) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    CheckCardUidIsInArray(cards, uid) {
        if (cards == null || cards.length == 0) {
            return false;
        }
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].CardIID.equals(uid)) {
                return true;
            }
        }
        return false;
    }
    OnPlayerUseDigimonEffectInBattle(playerId, uid) {
        if (this.fsmGameMain.CheckPlayerCanAttack(playerId) == false) {
            return false;
        }
        if (this.CheckGameLogicIsFree() == false) {
            return false;
        }
        if (this.waitPlayerId == null) {
            return false;
        }
        if (this.waitPlayerId.equals(playerId) == false) {
            return false;
        }
        let player = this.GetPlayer(playerId);
        let card = player.areaInBattle.GetCard(uid);
        if (card == null) {
            card = player.areaHand.GetCard(uid);
        }
        if (card) {
            if (card.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA && card.CanUseEffectInBattleArea()) {
                card.OnUseEffect();
                return true;
            }
            else if (card.whereAreaType == DtEnum_1.DtAreaType.HAND && card.CanUseEffectInHand()) {
                card.OnUseEffect();
                return true;
            }
        }
        return false;
    }
    OnPlayerUseFusionEvo(playerId, uid) {
        if (this.fsmGameMain.CheckPlayerCanAttack(playerId) == false) {
            return false;
        }
        if (this.CheckGameLogicIsFree() == false) {
            return false;
        }
        if (this.waitPlayerId == null) {
            return false;
        }
        if (this.waitPlayerId.equals(playerId) == false) {
            return false;
        }
        let player = this.GetPlayer(playerId);
        let card = player.areaHand.GetCard(uid);
        if (card && card.CanFusionEvo()) {
            card.OnFusionEvo();
            return true;
        }
        return false;
    }
    AddListener(type, obj, func) {
        this.event.AddListen(type, obj, func);
    }
    RemoveListener(type, obj, func = undefined) {
        if (this.event) {
            this.event.RemoveListen(type, obj, func);
        }
    }
    FireListener(type, msg) {
        this.event.FireListen(type, msg);
    }
    GetCurrentFsmEvo() {
        return this.systemChian.GetCurrentFsmEvo();
    }
    GetCurrentFsmActionManger() {
        return this.systemChian.GetCurrentFsmActionManger();
    }
    GetCurrentSysChainId() {
        return this.systemChian.chainId;
    }
    CheckInBattleHasEffectCanActivate(effType, player, area, msg = null) {
        return player.GetArea(area).CheckWithCondition((card) => {
            return card.CheckCardCanActivateEffect(effType, msg);
        });
    }
    GetSystemChain() {
        return this.systemChian;
    }
    Get2ClientMessageMgr() {
        return this.messageManager;
    }
    IsClear() {
        if (this.fsmGameMain == null)
            return true;
        return false;
    }
    Clear() {
        this.whileWaitPlayer = true;
        this.listTriggerEffect = null;
        if (this.fsmAttack != null) {
            this.fsmAttack.Clear();
            this.fsmAttack = null;
        }
        if (this.systemChian) {
            this.systemChian.Clear();
            this.systemChian = null;
        }
        if (this.event) {
            this.event.Clear();
            this.event = null;
        }
        if (this.fsmGameMain) {
            this.fsmGameMain.Clear();
            this.fsmGameMain = null;
        }
        if (this.globalBuffMgr) {
            this.globalBuffMgr.Clear();
            this.globalBuffMgr = null;
        }
        if (this.messageManager) {
            this.messageManager.Clear();
            this.messageManager = null;
        }
        if (this.playerTimeOut) {
            this.playerTimeOut = null;
        }
    }
    RunTimeOut() {
        if (this.playerTimeOut && this.playerTimeOut.IsRunning() && this.IsClear() == false) {
            if (this.playerTimeOut.IsPause() && this.playerTimeOut.IsTimeOut()) {
                this.playerTimeOut.PlayerAnimationPlayOver(null);
                return;
            }
            if (this.playerTimeOut.IsGameEnd()) {
                _Dcg_1.roomMgr.OnRoomGameEnd(this);
                this.GameEndPlayerWin();
                return true;
            }
            if (this.playerTimeOut.IsTimeOut()) {
                let pid = this.waitPlayerId;
                if (this.DoTimeoutLogic()) {
                    _Dcg_1.roomMgr.OnRoomTimeOut(this, pid);
                    return true;
                }
            }
        }
        let type = -1;
        if (this.playerTimeOut == null) {
            type = 0;
        }
        else if (this.playerTimeOut.IsRunning() == false) {
            type = 1;
        }
        else if (this.IsClear()) {
            type = 2;
            _Dcg_1.gLog.err("RunTimeOut is Clear");
            return false;
        }
        _Dcg_1.gLog.err("RunTimeOut nothing with type:" + type + "   " + this.GetCurrentPahse());
        return false;
    }
    ForceTimeOut() {
        this.playerTimeOut.replayTimeOut = true;
        this.GetCurrentWaitPlayer().roundData.replayTimeOut = true;
        return this.DoTimeoutLogic();
    }
    DoTimeoutLogic() {
        if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.StartBattle) {
            this.fsmGameMain.playerList.forEach((player) => {
                if (player.roundData.startChangeCardState == -1) {
                    player.roundData.startChangeCardState = 0;
                }
            });
            this.Run();
            return true;
        }
        if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.Init) {
            this.fsmGameMain.playerList.forEach((player) => {
                player.roundData.clientGameEvent = 1;
            });
            this.Run();
            return true;
        }
        let result = false;
        let count = 0;
        this.playerTimeOut.isInAutoSkip = true;
        while (this.IsClear() == false && this.playerTimeOut.IsTimeOut()) {
            count++;
            if (count > 100) {
                _Dcg_1.gLog.err("loop RunTimeOut");
                break;
            }
            if (this.SkipStep()) {
                this.Get2ClientMessageMgr().ClientShow(null, DtMessageData_1.ClientShowType.TIME_OUT_AUTO_SKIP, null, "");
                result = true;
                let runResult = this.Run();
                if (runResult == false) {
                    this.GameEndPlayerWin();
                }
            }
            else {
                _Dcg_1.gLog.err("unknown RunTimeOut error");
                break;
            }
        }
        if (this.IsClear() == false) {
            this.playerTimeOut.isInAutoSkip = false;
        }
        if (result) {
            return true;
        }
        _Dcg_1.gLog.err("IsTimeOut but no logic runing !!!!");
        return false;
    }
    GameEndPlayerWin() {
        let plist = this.fsmGameMain.playerList;
        let playerA = plist[0];
        let playerB = plist[1];
        if (playerA.areaDefense.CardCount() != playerB.areaDefense.CardCount()) {
            if (playerA.areaDefense.CardCount() > playerB.areaDefense.CardCount()) {
                this.GameOver(playerA, DtEnum_1.DtGameOverReason.TIME_OVER);
            }
            else {
                this.GameOver(playerB, DtEnum_1.DtGameOverReason.TIME_OVER);
            }
            return;
        }
        if (playerA.areaDeck.CardCount() != playerB.areaDeck.CardCount()) {
            if (playerA.areaDeck.CardCount() > playerB.areaDeck.CardCount()) {
                this.GameOver(playerA, DtEnum_1.DtGameOverReason.TIME_OVER);
            }
            else {
                this.GameOver(playerB, DtEnum_1.DtGameOverReason.TIME_OVER);
            }
            return;
        }
        if (playerA.areaHand.CardCount() != playerB.areaHand.CardCount()) {
            if (playerA.areaHand.CardCount() > playerB.areaHand.CardCount()) {
                this.GameOver(playerA, DtEnum_1.DtGameOverReason.TIME_OVER);
            }
            else {
                this.GameOver(playerB, DtEnum_1.DtGameOverReason.TIME_OVER);
            }
            return;
        }
        if (this.CurPlayerID.equals(playerA.playerId)) {
            this.GameOver(playerA, DtEnum_1.DtGameOverReason.TIME_OVER);
        }
        else {
            this.GameOver(playerB, DtEnum_1.DtGameOverReason.TIME_OVER);
        }
    }
    SkipStep() {
        if (this.IsClear()) {
            return false;
        }
        if (this.reconnectData != null) {
            if (this.reconnectData.PlayerChoose != null) {
                this.AutoSkipPlayerChoose();
                return true;
            }
            if (this.reconnectData.PlayerDefenseSelect != null) {
                this.OnPlayerChooseOne(this.waitPlayerId, Long_1.Long.fromNumber(0));
                return true;
            }
            if (this.reconnectData.PlayerSelectOptions != null) {
                this.OnPlayerChooseOne(this.waitPlayerId, Long_1.Long.fromNumber(0));
                return true;
            }
            if (this.reconnectData.PlayerSelectEffectActivate != null) {
                for (let i = 0; i < this.reconnectData.PlayerSelectEffectActivate.EffectActivate.length; i++) {
                    let effect = this.reconnectData.PlayerSelectEffectActivate.EffectActivate[i];
                    if (effect.AskActivate == false) {
                        this.OnPlayerChooseEffectActivateSortOrCancel(this.waitPlayerId, [effect.EffectIndex], null);
                        return true;
                    }
                }
                this.OnPlayerChooseEffectActivateSortOrCancel(this.waitPlayerId, null, [0]);
                return true;
            }
        }
        if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.FosterPhase) {
            this.OnPlayerSetNextTurn(this.waitPlayerId);
            return true;
        }
        if (this.GetCurrentPahse() == DtEnum_1.DtBattlePhase.MainPhase) {
            this.OnPlayerSetNextTurn(this.waitPlayerId);
            return true;
        }
        return false;
    }
    AutoSkipPlayerChoose() {
        let checkCard = this.reconnectData.PlayerChoose.CheckCards;
        let pChoose = this.reconnectData.PlayerChoose;
        let playerId = this.waitPlayerId;
        let pids = new Array();
        if (pChoose.CanCancel) {
            this.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
            return;
        }
        switch (pChoose.Compare) {
            case protoMsg_1.DcgProto.E_COMPARE.C_EQUAL_CARD_COUNT:
                if (pChoose.ChooseNums == 1) {
                    if (checkCard && checkCard.length > 0) {
                        this.OnPlayerChooseOne(playerId, checkCard[0].CardIID);
                    }
                    else {
                        this.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
                    }
                }
                else {
                    for (let i = 0; i < pChoose.ChooseNums; i++) {
                        if (checkCard[i]) {
                            pids.push(checkCard[i].CardIID);
                        }
                    }
                    this.OnPlayerChooseMul(playerId, pids);
                }
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_SORT:
                for (let i = 0; i < checkCard.length; i++) {
                    pids.push(checkCard[i].CardIID);
                }
                this.OnPlayerChooseMul(playerId, pids);
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_LESS_THAN_OR_EQUAL:
                for (let i = 0; i < pChoose.ChooseNums; i++) {
                    if (checkCard[i]) {
                        pids.push(checkCard[i].CardIID);
                    }
                }
                this.OnPlayerChooseMul(playerId, pids);
                break;
            case protoMsg_1.DcgProto.E_COMPARE.GREATE_EQUAL:
                for (let i = 0; i < pChoose.ChooseNums; i++) {
                    if (checkCard[i]) {
                        pids.push(checkCard[i].CardIID);
                    }
                }
                this.OnPlayerChooseMul(playerId, pids);
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_OVER_ATTACK:
                this.OnPlayerChooseOne(playerId, Long_1.Long.fromNumber(0));
                break;
        }
    }
    DtGMTest;
    OnGm(playerid, gm) {
        if (this.IsClear()) {
            return false;
        }
        if (this.DtGMTest == null) {
            this.DtGMTest = new DtGM_1.DtGM(this);
        }
        return this.DtGMTest.OnGm(playerid, gm);
    }
    GetPlaybackInitData() {
        return this.fsmGameMain.gameInitPlaybackData;
    }
    _tickId;
    _idx = 0;
    _skillList;
    _card;
    C_CheckEffectIndex() {
        this._skillList = _Dcg_1.gCfg.card_basic.GetAllSkill();
        _Dcg_1.gLog.err(this._skillList.length);
        this.C_InitClientEffectMode();
        this._tickId = setInterval(this.C_CheckEffectTick.bind(this));
    }
    C_InitClientEffectMode() {
        let mainPlayer = new DtPlayer_1.DtPlayer(Long_1.Long.fromNumber(100), this, null);
        this.fsmGameMain.playerList.push(mainPlayer);
        this._card = new DtCard_1.DtCard(mainPlayer, Long_1.Long.fromNumber(0), 0);
    }
    C_CheckEffectTick() {
        let skillid = this._skillList[this._idx];
        this.C_CareateEffectToCard(skillid);
        this._card.effects.forEach((k, v) => {
            _Dcg_1.gLog.sys(k.GetCreateor().EffectCreatorConstructorName);
            k.CheckLog();
        });
        this._card.effects.length = 0;
        this._idx++;
        if (this._idx >= this._skillList.length) {
            clearInterval(this._tickId);
        }
    }
    C_GetAllDescWithCardId(cardid) {
        if (this._card == null) {
            _Dcg_1.gLog.err("no _card set");
            return;
        }
        let effects = _Dcg_1.gCfg.card_basic.GetOneCardAllEffectWithCardid(cardid);
        if (effects && effects.length > 0) {
            for (let i = 0; i < effects.length; i++) {
                this.C_CareateEffectToCard(effects[i]);
            }
            let efflist = new Array();
            this._card.effects.forEach((k, v) => {
                let sDescs = k.GetSkillDesc();
                if (sDescs && sDescs.length > 0) {
                    let eff = new DtMessageData_1.DtEffectDesc();
                    eff.effectid = k.GetCreateor().effCfgId;
                    eff.skills = sDescs;
                    efflist.push(eff);
                }
            });
            this._card.effects.length = 0;
            return efflist;
        }
        return null;
    }
    C_GetEffectDescWithEffectIdAndIndex(effectid, index) {
        this.C_CareateEffectToCard(effectid);
        let efflist = new Array();
        this._card.effects.forEach((k, v) => {
            let sDescs = k.GetSkillDesc();
            if (sDescs && sDescs.length > 0) {
                let eff = new DtMessageData_1.DtEffectDesc();
                eff.effectid = k.GetCreateor().effCfgId;
                eff.skills = sDescs;
                efflist.push(eff);
            }
        });
        this._card.effects.length = 0;
        for (let i = 0; i < efflist.length; i++) {
            if (efflist[i].effectid == effectid) {
                let eff = efflist[i];
                for (let j = 0; j < eff.skills.length; j++) {
                    let skl = eff.skills[j];
                    if (skl.indexStage == index) {
                        return skl;
                    }
                }
            }
        }
        return null;
    }
    C_CareateEffectToCard(effectId) {
        let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(effectId);
        if (skillcfg && skillcfg.number) {
            try {
                let create = require("./Card/EffectCreator/" + skillcfg.number)?.default;
                if (create) {
                    let creator = new create();
                    this._card.CreateEffect(creator, skillcfg);
                    this._card.ClientShow(creator);
                }
            }
            catch (error) {
                _Dcg_1.gLog.err(error);
            }
        }
    }
}
exports.DtBattleManager = DtBattleManager;
//# sourceMappingURL=DtBattleManager.js.map