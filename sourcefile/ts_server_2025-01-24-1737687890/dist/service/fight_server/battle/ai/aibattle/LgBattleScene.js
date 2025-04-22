"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LgBattleScene = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEnum_1 = require("../../dtcg/Data/DtEnum");
const DtcgMessageFromClient_1 = require("../../dtcg/Message/DtcgMessageFromClient");
const LgPlayer_1 = require("./LgPlayer");
class LgBattleScene {
    root;
    playerList;
    currentCost;
    battleState;
    curRound = 0;
    curBattlePlayerId;
    curActionPlayerId;
    attacker;
    defenseer;
    Init(ai) {
        this.root = ai;
        this.root.registNotifyWithFunc(this);
    }
    Battle_Msg_PlayerSceneEvent(protoMsg) {
        setTimeout(() => {
            DtcgMessageFromClient_1.DtcgMessageFromClient.OnGameEventPrepared(this.root.GetAIPlayerId(), protoMsg.SCENE_EVENT_ID);
        }, 1);
    }
    Battle_Msg_PlayerChoose(protoMsg) {
        if (this.root.GetAIPlayerId().equals(protoMsg.PlayerIID)) {
            this.root.AI.SetPlayerChooseData(protoMsg);
        }
    }
    Battle_Msg_PlayerDefenseSelect(protoMsg) {
        if (this.root.GetAIPlayerId().equals(protoMsg.PlayerIID)) {
            this.root.AI.SetPlayerDefenseSelectData(protoMsg);
        }
    }
    Battle_Msg_PlayerSelectOptions(protoMsg) {
        if (this.root.GetAIPlayerId().equals(protoMsg.PlayerIID)) {
            this.root.AI.SetPlayerSelectOptionsData(protoMsg);
        }
    }
    Battle_Msg_Player_Select_Effect_Activate(protoMsg) {
        if (this.root.GetAIPlayerId().equals(protoMsg.PlayerIID)) {
            this.root.AI.SetPlayerSelectEffectActivateChooseData(protoMsg);
        }
    }
    Battle_Msg_Detail(protoMsg) {
        this.curActionPlayerId = protoMsg.WaitPlayerIID;
        let playerA = this.GetPlayer(protoMsg.PlayerA.PlayerIID);
        playerA.UpdateDetail(protoMsg.PlayerA);
        let playerB = this.GetPlayer(protoMsg.PlayerB.PlayerIID);
        playerB.UpdateDetail(protoMsg.PlayerB);
        if (this.curActionPlayerId.equals(this.root.GetAIPlayerId())) {
            this.root.AIPrerunning(this.curActionPlayerId);
        }
    }
    Battle_Msg_ReconnectData(protoMsg) {
    }
    Battle_Msg_BattleStartMsg(protoMsg) {
        _Dcg_1.gLog.err("AI 场景信息开始!!!!!");
        this.playerList = new Array();
        let playerA = new LgPlayer_1.LgPlayer(this, protoMsg.PlayerA.PlayerIID, protoMsg.PlayerA.PlayerIID.equals(this.root.GetAIPlayerId()));
        this.playerList.push(playerA);
        let playerB = new LgPlayer_1.LgPlayer(this, protoMsg.PlayerB.PlayerIID, protoMsg.PlayerB.PlayerIID.equals(this.root.GetAIPlayerId()));
        this.playerList.push(playerB);
        this.currentCost = 0;
    }
    Battle_Msg_SetBattlePhase(protoMsg) {
        this.battleState = Number(protoMsg.BattlePhase);
        this.curBattlePlayerId = protoMsg.PlayerIID;
        this.curRound = protoMsg.CurRound;
        if (this.battleState == DtEnum_1.DtBattlePhase.RoundStart) {
            if (this.curBattlePlayerId.equals(this.root.GetAIPlayerId())) {
                this.root.AI.RunRoundStartAI();
            }
        }
    }
    Battle_Msg_DigimonSetCost(protoMsg) {
        this.currentCost = protoMsg.Cost;
    }
    Battle_Msg_MoveCardMessage(protoMsg) {
        let player = this.GetPlayer(protoMsg.PlayerIID);
        player.MoveCard(protoMsg);
    }
    Battle_Msg_EvoDigimon(protoMsg) {
        let player = this.GetPlayer(protoMsg.PlayerIID);
        player.EvoCard(protoMsg);
    }
    Battle_Msg_UpdateCardDetails(protoMsg) {
        let player = this.GetPlayer(protoMsg.PlayerIID);
        player.UpdateCardDetail(protoMsg);
    }
    Battle_Msg_Update_Game_Battle_Card_Info(protoMsg) {
        for (let i = 0; i < protoMsg.GameBattlePlayers.length; i++) {
            this.GetPlayer(protoMsg.GameBattlePlayers[i].PlayerIID).playerBuffs = protoMsg.GameBattlePlayers[i].PlayerBuffs;
            this.GetPlayer(protoMsg.GameBattlePlayers[i].PlayerIID).UpdateBattleCardInfo(protoMsg.GameBattlePlayers[i].GameBattleCards);
            this.GetPlayer(protoMsg.GameBattlePlayers[i].PlayerIID).UpdateHandCardInfo(protoMsg.GameBattlePlayers[i].GameHandCards);
        }
    }
    Battle_Msg_Digimon_Degenerate(protoMsg) {
        let player = this.GetPlayer(protoMsg.PlayerIID);
        player.DigimonDegenerate(protoMsg);
    }
    Battle_Msg_Player_excavated(protoMsg) {
    }
    Battle_Msg_GameOver(protoMsg) {
        this.root.Clear();
    }
    Battle_Msg_Guess_Punch(data) {
    }
    Battle_Msg_Loading(data) {
    }
    Battle_Msg_ClientShow(protoMsg) {
        if (protoMsg.ShowType == protoMsg_1.DcgProto.E_CLIENT_SHOW_TYPE.CST_CARD_EFFECT) {
            if (protoMsg.CardIIDS && protoMsg.CardIIDS.length > 0) {
                let player = this.GetPlayer(protoMsg.PlayerIID);
                for (let i = 0; i < protoMsg.CardIIDS.length; i++) {
                    let card = player.FindCard(protoMsg.CardIIDS[i]);
                    if (card) {
                        let splits = protoMsg.other.split("|");
                        let effid = Number(splits[0]);
                        if (isNaN(effid) == false) {
                            if (effid != 0) {
                                card.SetActivateEffectInCurrentRound(effid);
                            }
                        }
                    }
                }
            }
        }
        if (protoMsg.ShowType == protoMsg_1.DcgProto.E_CLIENT_SHOW_TYPE.CST_START_GAME_PLAYER_IF_CHANGE_CARDS) {
            this.root.AI.SetPlayerIfChangeCards();
            this.root.AIPrerunning(this.root.GetAIPlayerId());
        }
        if (protoMsg.ShowType == protoMsg_1.DcgProto.E_CLIENT_SHOW_TYPE.CST_CARD_ATTACK) {
            this.attacker = this.GetPlayer(protoMsg.PlayerIID).FindCard(protoMsg.CardIIDS[0]);
            if (protoMsg.CardIIDS.length > 1) {
                this.defenseer = this.GetOppPlayer(protoMsg.PlayerIID).FindCard(protoMsg.CardIIDS[1]);
            }
        }
        if (protoMsg.ShowType == protoMsg_1.DcgProto.E_CLIENT_SHOW_TYPE.CST_CARD_ATTACK_OVER) {
            this.attacker = null;
            this.defenseer = null;
        }
    }
    GetPlayer(pid) {
        for (let i = 0; i < this.playerList.length; i++) {
            if (this.playerList[i].PlayerId.equals(pid)) {
                return this.playerList[i];
            }
        }
        return null;
    }
    GetOppPlayer(pid) {
        for (let i = 0; i < this.playerList.length; i++) {
            if (this.playerList[i].PlayerId.equals(pid) == false) {
                return this.playerList[i];
            }
        }
        return null;
    }
    Log() {
        _Dcg_1.gLog.err("======================AI====LOG=====START===============================================");
        _Dcg_1.gLog.err("场上");
        for (let i = 0; i < this.playerList.length; i++) {
            let area = this.playerList[i].GetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
            let str = area.cards.length + _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_176");
            area.cards.forEach((card) => {
                let state = card.GetBattleState() == DtEnum_1.DtCardBattleState.Activate ?
                    _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_177") :
                    _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_389");
                str += card.GetCfgName() + "^" + card.GetOriginDigimonList().length + "^" + state + "   ";
            });
            _Dcg_1.gLog.err(str);
        }
        _Dcg_1.gLog.err("手牌");
        for (let i = 0; i < this.playerList.length; i++) {
            let area = this.playerList[i].GetArea(DtEnum_1.DtAreaType.HAND);
            let str = area.cards.length + _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_176");
            area.cards.forEach((card) => {
                str += card.GetCfgName() + "   ";
            });
            _Dcg_1.gLog.err(str);
        }
        _Dcg_1.gLog.err("孵化区");
        for (let i = 0; i < this.playerList.length; i++) {
            let area = this.playerList[i].GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH);
            let str = area.cards.length + _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_176");
            area.cards.forEach((card) => {
                str += card.GetCfgName() + "   ";
            });
            _Dcg_1.gLog.err(str);
        }
        _Dcg_1.gLog.err("======================AI====LOG=====END=================================================");
    }
    Clear() {
    }
}
exports.LgBattleScene = LgBattleScene;
//# sourceMappingURL=LgBattleScene.js.map