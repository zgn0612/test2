"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtcgMessageFromClient = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
class DtcgMessageFromClient {
    static SendToMsg(param, playerid) {
        let msg = _Dcg_1.gFun.GetBattleRoomFight();
        msg.BattleParams = param;
        if (_Dcg_1.roomMgr.IsUseClientServer) {
            _Dcg_1.roomMgr.ClientModeSendMsg(msg, playerid);
        }
        else {
            _Dcg_1.roomMgr.ServerModeGameSendMsgToServer(msg);
        }
    }
    static SetDigiTamaHatch(playerId) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_HATCH_DIGIMON,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static DigimonCardUse(playerId, cardId, index) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_CARD_PLAY,
            CardIIDA: cardId,
            ParamNumber: index,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static SetNextTurn(playerId) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SET_NEXT_TURN,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnDigimonBattle(playerId, atkCardId, defCardId) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_BATTLE,
            CardIIDA: atkCardId,
            CardIIDB: defCardId,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnDigimonAttackDefense(playerId, atkCardId) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_ATTACK_DEFENSE,
            CardIIDA: atkCardId,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnDigimonEvo(playerId, evoCard, originCard, cost) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_EVO,
            CardIIDA: evoCard,
            CardIIDB: originCard,
            ParamNumber: cost,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnPlayerChooseMsg(playerId, uid, reqid) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_CHOOSE_ONE,
            CardIIDA: uid,
            RequestId: reqid,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnPlayerSeq(playerId, uids, reqid) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_CHOOSE_MUL,
            IIDList: uids,
            RequestId: reqid,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static PlayerUseDigimonInBattleEffect(playerId, cardUID) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_USE_DIGIMON_EFFECT_IN_BATTLE,
            CardIIDA: cardUID,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static PlayerFusionEvo(playerId, cardUID) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_USE_FUSION_EVO,
            CardIIDA: cardUID,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnGameEventPrepared(playerId, eventid) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SCENE_EVENT_PREPARED,
            ParamNumber: eventid,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
    static OnPlayerActiveEffect(playerId, actives, cancel, reqid) {
        let data_req = {
            Action: protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_PLAYER_ACTIVATE_EFFECT,
            NumberListA: actives,
            NumberListB: cancel,
            RequestId: reqid,
        };
        DtcgMessageFromClient.SendToMsg(data_req, playerId);
        return data_req;
    }
}
exports.DtcgMessageFromClient = DtcgMessageFromClient;
//# sourceMappingURL=DtcgMessageFromClient.js.map