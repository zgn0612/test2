"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtcgMessage2Client = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEnum_1 = require("../Data/DtEnum");
const DtMessageData_1 = require("./DtMessageData");
class DtcgMessage2Client {
    parent;
    questId = 0;
    constructor(parent) {
        this.parent = parent;
    }
    ApplyAQuestId() {
        this.questId++;
        return this.questId;
    }
    InitMessage(Player1, player2) {
        let msgData = new protoMsg_1.DcgProto.S_BattleStartMsg();
        msgData.PlayerA = new protoMsg_1.DcgProto.S_PlayerBattleDetail();
        msgData.PlayerA.PlayerIID = Player1.playerId;
        msgData.PlayerA.AreaDeckCount = Player1.areaDeck.CardCount();
        msgData.PlayerA.AreaDefenseCount = Player1.areaDefense.CardCount();
        msgData.PlayerA.AreaDigitamaCount = Player1.areaDigitama.CardCount();
        msgData.PlayerB = new protoMsg_1.DcgProto.S_PlayerBattleDetail();
        msgData.PlayerB.PlayerIID = player2.playerId;
        msgData.PlayerB.AreaDeckCount = player2.areaDeck.CardCount();
        msgData.PlayerB.AreaDefenseCount = player2.areaDefense.CardCount();
        msgData.PlayerB.AreaDigitamaCount = player2.areaDigitama.CardCount();
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    SetBattleStateMessage(player, state, round) {
        let msgData = new protoMsg_1.DcgProto.S_SetBattlePhase();
        msgData.PlayerIID = player.playerId;
        msgData.BattlePhase = Number(state);
        msgData.CurRound = round;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    DigimonSetCost(cost) {
        let msgData = new protoMsg_1.DcgProto.S_DigimonSetCost();
        msgData.Cost = cost;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    MoveCardMessage(player, card, from, to, reason) {
        let msgData = new protoMsg_1.DcgProto.S_MoveCardMessage();
        msgData.PlayerIID = player.playerId;
        msgData.From = Number(from);
        msgData.To = Number(to);
        msgData.CardData = this.ToProto_OtgherCard(card);
        msgData.CardDetail = this.ToProto_DetailCard(card);
        msgData.Reason = Number(reason);
        if (to == DtEnum_1.DtAreaType.BATTLE_AREA) {
            msgData.CardIndex = card.GetCardInBattleIndex();
        }
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    GameOver(player, reason) {
        let msgData = new protoMsg_1.DcgProto.S_GameOver();
        msgData.PlayerIID = player.playerId;
        msgData.Reason = reason;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    EvoDigimon(player, cardEvo, cardOri) {
        let msgData = new protoMsg_1.DcgProto.S_EvoDigimon();
        msgData.EvolutionType = protoMsg_1.DcgProto.E_EVOLUTION_TYPE.ET_NORMAL;
        msgData.PlayerIID = player.playerId;
        msgData.EvoCardData = this.ToProto_OtgherCard(cardEvo);
        msgData.EvoCardDetail = this.ToProto_DetailCard(cardEvo);
        msgData.OriginCardData = this.ToProto_OtgherCard(cardOri);
        msgData.OriginCardDetail = this.ToProto_DetailCard(cardOri);
        msgData.BottomCardData = null;
        msgData.BottomCardDetail = null;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    FusionEvoDigimon(player, cardEvo, cardTop, cardBottom) {
        let msgData = new protoMsg_1.DcgProto.S_EvoDigimon();
        msgData.EvolutionType = protoMsg_1.DcgProto.E_EVOLUTION_TYPE.ET_FUSION;
        msgData.PlayerIID = player.playerId;
        msgData.EvoCardData = this.ToProto_OtgherCard(cardEvo);
        msgData.EvoCardDetail = this.ToProto_DetailCard(cardEvo);
        msgData.OriginCardData = this.ToProto_OtgherCard(cardTop);
        msgData.OriginCardDetail = this.ToProto_DetailCard(cardTop);
        msgData.BottomCardData = this.ToProto_OtgherCard(cardBottom);
        msgData.BottomCardDetail = this.ToProto_DetailCard(cardBottom);
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    DegenerateDigimon(player, cardDeg, degenProcessCards, type, caster) {
        let msgData = new protoMsg_1.DcgProto.S_DigimonDegenerate();
        msgData.PlayerIID = player.playerId;
        msgData.DegenerateCard = this.ToProto_OtgherCard(cardDeg);
        msgData.ProcessDegenCards = this.GetCardsMsgData(degenProcessCards);
        msgData.DegType = type;
        msgData.CasterCard = this.ToProto_OtgherCard(caster);
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    UpdateCardDetails(player, card) {
        let msgData = new protoMsg_1.DcgProto.S_UpdateCardDetails();
        msgData.PlayerIID = player.playerId;
        msgData.Card = this.ToProto_OtgherCard(card);
        msgData.Detail = this.ToProto_DetailCard(card);
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    UpdateGameBattleCardInfo(player1, player2) {
        let msgData = new protoMsg_1.DcgProto.S_UpdateGameBattleCardInfo();
        msgData.GameBattlePlayers = new Array();
        msgData.GameBattlePlayers.push(player1.GetGameBattlePlayer());
        msgData.GameBattlePlayers.push(player2.GetGameBattlePlayer());
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    PlayerChoose(card, type, chooseCards, nums, effect, effidx, cancancel = false) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerChoose();
        msgData.RequestId = this.ApplyAQuestId();
        msgData.PlayerIID = card.parent.playerId;
        msgData.EffectCard = this.ToProto_OtgherCard(card);
        msgData.EffectOriginInfo = new protoMsg_1.DcgProto.S_EffectOriginInfo();
        if (effect) {
            let realCard = effect.GetRealityOriginCard();
            if (realCard) {
                msgData.EffectOriginInfo.CardIID = realCard.uid;
            }
            msgData.EffectOriginInfo.EffectId = effect.GetCreateor().effCfgId;
        }
        else {
            msgData.EffectOriginInfo.EffectId = -1;
        }
        msgData.EffectOriginInfo.Index = effidx;
        msgData.Compare = Number(type);
        msgData.ChooseNums = nums;
        msgData.CheckCards = this.GetCardsMsgData(chooseCards);
        msgData.CanCancel = cancancel;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        fight.PlayerChoose = msgData;
        this.parent.SetGameWaitPlayer(card.parent.playerId, fight);
    }
    PlayerChooseCard(player, card, type, chooseCards, nums, effect, effidx, cancancel = false, compareExtend = DtEnum_1.DtCompareExtend.None) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerChoose();
        msgData.RequestId = this.ApplyAQuestId();
        msgData.PlayerIID = player.playerId;
        msgData.EffectCard = this.ToProto_OtgherCard(card);
        msgData.EffectOriginInfo = new protoMsg_1.DcgProto.S_EffectOriginInfo();
        if (effect) {
            let realCard = effect.GetRealityOriginCard();
            if (realCard) {
                msgData.EffectOriginInfo.CardIID = realCard.uid;
            }
            msgData.EffectOriginInfo.EffectId = effect.GetCreateor().effCfgId;
        }
        else {
            msgData.EffectOriginInfo.EffectId = 0;
        }
        msgData.EffectOriginInfo.Index = effidx;
        msgData.Compare = Number(type);
        msgData.ChooseNums = nums;
        msgData.CheckCards = new Array();
        for (let i = 0; i < chooseCards.length; i++) {
            msgData.CheckCards.push(this.ToProto_OtgherCard(chooseCards[i].card));
        }
        msgData.CanCancel = cancancel;
        msgData.CompareExtend = compareExtend;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        fight.PlayerChoose = msgData;
        this.parent.SetGameWaitPlayer(player.playerId, fight);
    }
    PlayerdDefenseSelect(player, atkCard, atkType, defenseCards) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerDefenseSelect();
        msgData.RequestId = this.ApplyAQuestId();
        msgData.PlayerIID = player.playerId;
        msgData.AtkCard = this.ToProto_OtgherCard(atkCard);
        msgData.AtkType = Number(atkType);
        msgData.ChooseDefenseCards = this.GetCardsMsgData(defenseCards);
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        fight.PlayerDefenseSelect = msgData;
        this.parent.SetGameWaitPlayer(player.playerId, fight);
    }
    PlayerSelectOptions(player, num, effect, index = 5) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerSelectOptions();
        msgData.RequestId = this.ApplyAQuestId();
        msgData.PlayerIID = player.playerId;
        msgData.Num = num;
        msgData.EffectOriginInfo = new protoMsg_1.DcgProto.S_EffectOriginInfo();
        let realCard = effect.GetRealityOriginCard();
        if (realCard) {
            msgData.EffectOriginInfo.CardIID = realCard.uid;
        }
        msgData.EffectOriginInfo.EffectId = effect.GetCreateor().effCfgId;
        msgData.EffectOriginInfo.Index = index;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        fight.PlayerSelectOptions = msgData;
        this.parent.SetGameWaitPlayer(player.playerId, fight);
    }
    CardsExcavated(player, type, where, cards) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerExcavated();
        msgData.PlayerIID = player.playerId;
        msgData.type = type;
        msgData.CheckCards = this.GetCardsMsgData(cards);
        msgData.From = Number(where);
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
        return msgData;
    }
    PlayerSelectEffectActivate(player, eff) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerSelectEffectActivate();
        msgData.RequestId = this.ApplyAQuestId();
        msgData.PlayerIID = player.playerId;
        msgData.EffectActivate = new Array();
        for (let i = 0; i < eff.length; i++) {
            eff[i].EffectIndex = i + 1;
            let protoEff = new protoMsg_1.DcgProto.S_EffectActivate();
            let creator = eff[i].GetCreateor();
            let activateCard = eff[i].GetActivateCard();
            if (activateCard) {
                protoEff.CardIID = activateCard.uid;
            }
            let realEffCard = eff[i].GetRealityOriginCard();
            if (realEffCard) {
                protoEff.CfgId = realEffCard.config.id;
            }
            protoEff.EffectCfgId = creator.effCfgId;
            protoEff.AskActivate = eff[i].GetActiveNeedAsk();
            protoEff.EffectIndex = eff[i].EffectIndex;
            protoEff.IsCon = eff[i].ChainCheckCondition();
            protoEff.IsUseful = eff[i].PreCheckPlayerUsefulActivate();
            msgData.EffectActivate.push(protoEff);
        }
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        fight.PlayerSelectEffectActivate = msgData;
        this.parent.SetGameWaitPlayer(player.playerId, fight);
    }
    reconnectClientShowList;
    ClientShow(player, type, cardArr, value) {
        let msgData = new protoMsg_1.DcgProto.S_ClientShow();
        if (player) {
            msgData.PlayerIID = player.playerId;
        }
        msgData.ShowType = Number(type);
        msgData.CardIIDS = cardArr;
        msgData.other = value;
        this.SaveOrDeleteClientShow(msgData);
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    ClientGameEvent(eventid) {
        let msgData = new protoMsg_1.DcgProto.S_PlayerSceneEvent();
        msgData.SCENE_EVENT_ID = eventid;
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    SaveOrDeleteClientShow(data) {
        if (this.reconnectClientShowList == null) {
            this.reconnectClientShowList = new Array();
        }
        if (data.ShowType == DtMessageData_1.ClientShowType.CardEffect) {
            this.reconnectClientShowList.push(data);
        }
        if (data.ShowType == DtMessageData_1.ClientShowType.CardEffectOver) {
            let len = this.reconnectClientShowList.length - 1;
            for (let i = len; i >= 0; i--) {
                if (this.reconnectClientShowList[i].ShowType == DtMessageData_1.ClientShowType.CardEffect) {
                    this.reconnectClientShowList.splice(i, 1);
                    break;
                }
            }
        }
        if (data.ShowType == DtMessageData_1.ClientShowType.CardAttack) {
            this.reconnectClientShowList.push(data);
        }
        if (data.ShowType == DtMessageData_1.ClientShowType.CardAttackJudge) {
            this.reconnectClientShowList.push(data);
        }
        if (data.ShowType == DtMessageData_1.ClientShowType.CardAttackOver) {
            let len = this.reconnectClientShowList.length - 1;
            for (let i = len; i >= 0; i--) {
                if (this.reconnectClientShowList[i].ShowType == DtMessageData_1.ClientShowType.CardAttack) {
                    this.reconnectClientShowList.splice(i, 1);
                }
                else if (this.reconnectClientShowList[i].ShowType == DtMessageData_1.ClientShowType.CardAttackJudge) {
                    this.reconnectClientShowList.splice(i, 1);
                }
            }
        }
        if (this.reconnectClientShowList.length > 50) {
            _Dcg_1.gLog.err("reconnectClientShowList len is more than >> 50");
        }
    }
    UpdateBattleDetail(waitPlayerId, Player1, player2) {
        let msgData = new protoMsg_1.DcgProto.S_BattleDetail();
        msgData.TimeOutEndTime = Math.ceil(this.parent.playerTimeOut.GetCurrnetOutTime() / 1000);
        msgData.IsPause = this.parent.playerTimeOut.IsPause();
        msgData.WaitPlayerIID = waitPlayerId;
        msgData.PlayerA = new protoMsg_1.DcgProto.S_PlayerBattleDetail();
        msgData.PlayerA.PlayerIID = Player1.playerId;
        msgData.PlayerA.AreaDeckCount = Player1.areaDeck.CardCount();
        msgData.PlayerA.AreaDefenseCount = Player1.areaDefense.CardCount();
        msgData.PlayerA.AreaDigitamaCount = Player1.areaDigitama.CardCount();
        msgData.PlayerA.PlayerRemainingTime = Player1.roundData.GetRemainingTime();
        msgData.PlayerB = new protoMsg_1.DcgProto.S_PlayerBattleDetail();
        msgData.PlayerB.PlayerIID = player2.playerId;
        msgData.PlayerB.AreaDeckCount = player2.areaDeck.CardCount();
        msgData.PlayerB.AreaDefenseCount = player2.areaDefense.CardCount();
        msgData.PlayerB.AreaDigitamaCount = player2.areaDigitama.CardCount();
        msgData.PlayerB.PlayerRemainingTime = player2.roundData.GetRemainingTime();
        _Dcg_1.roomMgr.GameBattleLogicSendMsg(this.parent, msgData);
    }
    GetReconnectData(playerID) {
        let data = new protoMsg_1.DcgProto.S_ReconnectData();
        if (playerID) {
            let reconPlayer = this.parent.GetPlayer(playerID);
            if (reconPlayer == null) {
                _Dcg_1.gLog.err("[battle error] not find reconnect player");
                return data;
            }
            data.StartChangeCardState = reconPlayer.roundData.startChangeCardState;
        }
        data.CurCost = this.parent.CurCost;
        data.CurTurnPlayerIID = this.parent.CurPlayerID;
        data.CurActionPlayerId = this.parent.GetWaitPlayerId();
        data.CurRound = this.parent.CurRound;
        data.BattlePhase = Number(this.parent.GetCurrentPahse());
        let players = this.parent.GetAllPlayer();
        data.PlayerA = players[0].GetReconnectData(playerID);
        data.PlayerB = players[1].GetReconnectData(playerID);
        data.RoomFight = this.parent.reconnectData;
        data.RoomBrowse = this.parent.reconnectBrowse;
        data.ClientShowList = this.reconnectClientShowList;
        data.TimeOutEndTime = Math.ceil(this.parent.playerTimeOut.GetCurrnetOutTime() / 1000);
        data.globalBuff = this.parent.globalBuffMgr.GetReconnectData();
        data.IsPause = this.parent.playerTimeOut.IsPause();
        return data;
    }
    GetCardsMsgData(cards) {
        let listData = new Array();
        for (let i = 0; i < cards.length; i++) {
            listData.push(this.ToProto_OtgherCard(cards[i]));
        }
        return listData;
    }
    GetReconnectCardInfo(card) {
        if (card) {
            let data = new protoMsg_1.DcgProto.S_ReconnectCard();
            data.OtherCard = this.ToProto_OtgherCard(card);
            data.OtherCardDetail = this.ToProto_DetailCard(card);
            data.LastBattleInfo = card.GetLastBattleInfo();
            data.LastHandInfo = card.GetLastHandInfo();
            return data;
        }
        else {
            return null;
        }
    }
    ToProto_OtgherCard(card) {
        let msg = new protoMsg_1.DcgProto.S_OtherCard();
        msg.CardIID = card.uid;
        if (card.config) {
            msg.CfgId = card.config.id;
        }
        msg.CardBattleState = Number(card.cardBattleState);
        msg.CardSummonRound = card.cardSummonRound;
        msg.EvoOriginPrevCardIID = card.evoOriginPrevCardUId;
        msg.PlayerIID = card.parent.playerId;
        return msg;
    }
    ToProto_DetailCard(card) {
        let msg = new protoMsg_1.DcgProto.S_OtherCardDetail();
        msg.AreaType = Number(card.whereAreaType);
        msg.LastDP = card.GetLastDP();
        return msg;
    }
    Clear() {
    }
    DeepCopy(type, data) {
        let buffer = type.encode(data).finish();
        let decode = type.decode(buffer);
        return decode;
    }
}
exports.DtcgMessage2Client = DtcgMessage2Client;
//# sourceMappingURL=DtcgMessage2Client.js.map