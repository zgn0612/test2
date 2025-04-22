"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIRoom = void 0;
const Long_1 = require("../../cmn/proto/Long");
const protoMsg_1 = require("../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../cmn/_Dcg");
const DtEnum_1 = require("../dtcg/Data/DtEnum");
const AIRoot_1 = require("./AIRoot");
class AIRoom {
    parent;
    roomId;
    AI_A = null;
    AI_B = null;
    CheckBattleNeedAI(roomData, parent) {
        this.roomId = roomData.InstanceId;
        this.parent = parent;
        if (roomData.FightRoleA.RobotData != null) {
            let group = _Dcg_1.gCfg.aiRoleCfg.GetCfgWithRoleId(roomData.FightRoleA.RobotData.CfgId);
            if (group == null) {
                _Dcg_1.gLog.err("not find ai role with id ======>" + roomData.FightRoleA.RobotData.CfgId);
                return;
            }
            let cards = _Dcg_1.gCfg.aiDeckCfg.GetCardDeck(group.group_id);
            if (cards == null || cards.length == 0) {
                _Dcg_1.gLog.err("not find ai deck with id ======>" + group.group_id);
                return;
            }
            roomData.FightRoleA.DeckInfo = new protoMsg_1.DcgProto.S_DeckInfo();
            let deckInfo = roomData.FightRoleA.DeckInfo;
            deckInfo.CardEgg = new Array();
            deckInfo.CardDeck = new Array();
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].card_num > 0) {
                    let cardcfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(cards[i].card);
                    if (cardcfg.cardType == DtEnum_1.DtCardType.DigiTama) {
                        deckInfo.CardEgg.push({ CfgId: cards[i].card, Num: cards[i].card_num });
                    }
                    else {
                        deckInfo.CardDeck.push({ CfgId: cards[i].card, Num: cards[i].card_num });
                    }
                }
            }
            roomData.FightRoleA.OtherRole = new protoMsg_1.DcgProto.S_OtherRole();
            roomData.FightRoleA.OtherRole.InstanceId = Long_1.Long.fromNumber(roomData.FightRoleA.RobotData.CfgId);
            let otherRole = roomData.FightRoleA.OtherRole;
            otherRole.NickName = group.name;
            this.AI_A = new AIRoot_1.AIRoot(roomData.FightRoleA.OtherRole.InstanceId, this);
            this.AI_A.Init();
        }
        if (roomData.FightRoleB.RobotData != null) {
            let group = _Dcg_1.gCfg.aiRoleCfg.GetCfgWithRoleId(roomData.FightRoleB.RobotData.CfgId);
            if (group == null) {
                _Dcg_1.gLog.err("not find ai role with id ======>" + roomData.FightRoleB.RobotData.CfgId);
                return;
            }
            let cards = _Dcg_1.gCfg.aiDeckCfg.GetCardDeck(group.group_id);
            if (cards == null || cards.length == 0) {
                _Dcg_1.gLog.err("not find ai deck with id ======>" + group.group_id);
                return;
            }
            roomData.FightRoleB.DeckInfo = new protoMsg_1.DcgProto.S_DeckInfo();
            let deckInfo = roomData.FightRoleB.DeckInfo;
            deckInfo.CardEgg = new Array();
            deckInfo.CardDeck = new Array();
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].card_num > 0) {
                    let cardcfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(cards[i].card);
                    if (cardcfg.cardType == DtEnum_1.DtCardType.DigiTama) {
                        deckInfo.CardEgg.push({ CfgId: cards[i].card, Num: cards[i].card_num });
                    }
                    else {
                        deckInfo.CardDeck.push({ CfgId: cards[i].card, Num: cards[i].card_num });
                    }
                }
            }
            roomData.FightRoleB.OtherRole = new protoMsg_1.DcgProto.S_OtherRole();
            roomData.FightRoleB.OtherRole.InstanceId = Long_1.Long.fromNumber(roomData.FightRoleB.RobotData.CfgId);
            let otherRole = roomData.FightRoleB.OtherRole;
            otherRole.NickName = group.name;
            this.AI_B = new AIRoot_1.AIRoot(roomData.FightRoleB.OtherRole.InstanceId, this);
            this.AI_B.Init();
        }
    }
    RunMsg(msg) {
        if (msg.BattleStartMsg != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_BattleStartMsg(msg.BattleStartMsg);
            this.AI_B?.GetBattleScene().Battle_Msg_BattleStartMsg(msg.BattleStartMsg);
        }
        if (msg.SetBattlePhase != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_SetBattlePhase(msg.SetBattlePhase);
            this.AI_B?.GetBattleScene().Battle_Msg_SetBattlePhase(msg.SetBattlePhase);
        }
        if (msg.DigimonSetCost != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_DigimonSetCost(msg.DigimonSetCost);
            this.AI_B?.GetBattleScene().Battle_Msg_DigimonSetCost(msg.DigimonSetCost);
        }
        if (msg.GameOver != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_GameOver(msg.GameOver);
            this.AI_B?.GetBattleScene().Battle_Msg_GameOver(msg.GameOver);
        }
        if (msg.MoveCardMessage != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_MoveCardMessage(msg.MoveCardMessage);
            this.AI_B?.GetBattleScene().Battle_Msg_MoveCardMessage(msg.MoveCardMessage);
        }
        if (msg.EvoDigimon != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_EvoDigimon(msg.EvoDigimon);
            this.AI_B?.GetBattleScene().Battle_Msg_EvoDigimon(msg.EvoDigimon);
        }
        if (msg.UpdateCardDetails != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_UpdateCardDetails(msg.UpdateCardDetails);
            this.AI_B?.GetBattleScene().Battle_Msg_UpdateCardDetails(msg.UpdateCardDetails);
        }
        if (msg.PlayerChoose != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_PlayerChoose(msg.PlayerChoose);
            this.AI_B?.GetBattleScene().Battle_Msg_PlayerChoose(msg.PlayerChoose);
        }
        if (msg.PlayerDefenseSelect != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_PlayerDefenseSelect(msg.PlayerDefenseSelect);
            this.AI_B?.GetBattleScene().Battle_Msg_PlayerDefenseSelect(msg.PlayerDefenseSelect);
        }
        if (msg.PlayerSelectOptions != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_PlayerSelectOptions(msg.PlayerSelectOptions);
            this.AI_B?.GetBattleScene().Battle_Msg_PlayerSelectOptions(msg.PlayerSelectOptions);
        }
        if (msg.ClientShow != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_ClientShow(msg.ClientShow);
            this.AI_B?.GetBattleScene().Battle_Msg_ClientShow(msg.ClientShow);
        }
        if (msg.BattleDetail != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_Detail(msg.BattleDetail);
            this.AI_B?.GetBattleScene().Battle_Msg_Detail(msg.BattleDetail);
        }
        if (msg.PlayerSelectEffectActivate != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_Player_Select_Effect_Activate(msg.PlayerSelectEffectActivate);
            this.AI_B?.GetBattleScene().Battle_Msg_Player_Select_Effect_Activate(msg.PlayerSelectEffectActivate);
        }
        if (msg.UpdateGameBattleCardInfo != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_Update_Game_Battle_Card_Info(msg.UpdateGameBattleCardInfo);
            this.AI_B?.GetBattleScene().Battle_Msg_Update_Game_Battle_Card_Info(msg.UpdateGameBattleCardInfo);
        }
        if (msg.DigimonDegenerate != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_Digimon_Degenerate(msg.DigimonDegenerate);
            this.AI_B?.GetBattleScene().Battle_Msg_Digimon_Degenerate(msg.DigimonDegenerate);
        }
        if (msg.PlayerExcavated != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_Player_excavated(msg.PlayerExcavated);
            this.AI_B?.GetBattleScene().Battle_Msg_Player_excavated(msg.PlayerExcavated);
        }
        if (msg.PlayerSceneEvent != null) {
            this.AI_A?.GetBattleScene().Battle_Msg_PlayerSceneEvent(msg.PlayerSceneEvent);
            this.AI_B?.GetBattleScene().Battle_Msg_PlayerSceneEvent(msg.PlayerSceneEvent);
        }
    }
    HasAI() {
        if (this.AI_A || this.AI_B) {
            return true;
        }
        return false;
    }
    AISetGameMainInit(player) {
        if (player.roundData.clientGameEvent != 0) {
            return;
        }
        if (this.AI_A) {
            if (this.AI_A.GetAIPlayerId().equals(player.playerId)) {
                player.roundData.clientGameEvent = DtEnum_1.DtPlayerGameEvent.GameInitOK;
                let data_req = {
                    Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SCENE_EVENT_PREPARED,
                    ParamNumber: 1,
                };
                this.parent.SaveReplayPlayerOperate(player.playerId, 1, data_req);
            }
        }
        if (this.AI_B) {
            if (this.AI_B.GetAIPlayerId().equals(player.playerId)) {
                player.roundData.clientGameEvent = DtEnum_1.DtPlayerGameEvent.GameInitOK;
                let data_req = {
                    Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SCENE_EVENT_PREPARED,
                    ParamNumber: 1,
                };
                this.parent.SaveReplayPlayerOperate(player.playerId, 1, data_req);
            }
        }
    }
    CheckAINeedChangeCards(player) {
        if (this.AI_A) {
            if (this.AI_A.GetAIPlayerId().equals(player.playerId)) {
                return player.roundData.startChangeCardState == -1;
            }
        }
        if (this.AI_B) {
            if (this.AI_B.GetAIPlayerId().equals(player.playerId)) {
                return player.roundData.startChangeCardState == -1;
            }
        }
        return false;
    }
    IsWaitAI() {
        if (this.AI_A) {
            return this.AI_A.IsWaitAI();
        }
        if (this.AI_B) {
            return this.AI_B.IsWaitAI();
        }
    }
    RunAI() {
        if (this.AI_A && this.AI_A.IsWaitAI()) {
            this.AI_A.Run();
        }
        if (this.AI_B && this.AI_B.IsWaitAI()) {
            this.AI_B.Run();
        }
    }
    Clear() {
        if (this.AI_A) {
            this.AI_A.Clear();
            this.AI_A = null;
        }
        if (this.AI_B) {
            this.AI_B.Clear();
            this.AI_B = null;
        }
        this.parent = null;
    }
}
exports.AIRoom = AIRoom;
//# sourceMappingURL=AIRoom.js.map