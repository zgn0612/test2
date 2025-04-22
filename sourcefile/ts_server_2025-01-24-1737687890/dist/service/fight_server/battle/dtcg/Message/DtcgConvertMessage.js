"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtcgConvertMessage = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtMessageData_1 = require("./DtMessageData");
class DtcgConvertMessage {
    ConvertMessageAppointPlayer(data, toPlayerId) {
        if (data instanceof protoMsg_1.DcgProto.S_BattleStartMsg) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_SetBattlePhase) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_DigimonSetCost) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_GameOver) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_MoveCardMessage) {
            if (data.Reason == DtMessageData_1.DtProtoEnum_MoveReason.CardEffectMoveToHandAndShowCard) {
                return data;
            }
            if (data.Reason == DtMessageData_1.DtProtoEnum_MoveReason.CardEffectMoveShowCardFromHand) {
                return data;
            }
            if (this.IsBlackArea(data.From) && this.IsBlackArea(data.To)) {
                let decode = this.DeepCopy(protoMsg_1.DcgProto.S_MoveCardMessage, data);
                decode.CardData.CfgId = 0;
                return decode;
            }
            if (this.IsBlackArea(data.From) && data.To == protoMsg_1.DcgProto.E_AREA_TYPE.AT_HAND) {
                if (toPlayerId == null || data.PlayerIID.equals(toPlayerId) == false) {
                    let decode = this.DeepCopy(protoMsg_1.DcgProto.S_MoveCardMessage, data);
                    decode.CardData.CfgId = 0;
                    return decode;
                }
            }
            if (this.IsBlackArea(data.To) && data.From == protoMsg_1.DcgProto.E_AREA_TYPE.AT_HAND) {
                if (toPlayerId == null || data.PlayerIID.equals(toPlayerId) == false) {
                    let decode = this.DeepCopy(protoMsg_1.DcgProto.S_MoveCardMessage, data);
                    decode.CardData.CfgId = 0;
                    return decode;
                }
            }
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_EvoDigimon) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_UpdateCardDetails) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_PlayerChoose) {
            if (toPlayerId && toPlayerId.equals(data.PlayerIID)) {
                return data;
            }
            else {
                let decode = this.DeepCopy(protoMsg_1.DcgProto.S_PlayerChoose, data);
                if (decode && decode.CheckCards) {
                    for (let i = 0; i < decode.CheckCards.length; i++) {
                        decode.CheckCards[i].CfgId = 0;
                    }
                }
                return decode;
            }
        }
        if (data instanceof protoMsg_1.DcgProto.S_PlayerDefenseSelect) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_PlayerSelectOptions) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_ClientShow) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_BattleDetail) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_PlayerSelectEffectActivate) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_UpdateGameBattleCardInfo) {
            let decode = this.DeepCopy(protoMsg_1.DcgProto.S_UpdateGameBattleCardInfo, data);
            for (let i = 0; i < decode.GameBattlePlayers.length; i++) {
                if (toPlayerId == null || decode.GameBattlePlayers[i].PlayerIID.equals(toPlayerId) == false) {
                    decode.GameBattlePlayers[i].GameHandCards = null;
                }
            }
            return decode;
        }
        if (data instanceof protoMsg_1.DcgProto.S_DigimonDegenerate) {
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_PlayerExcavated) {
            if (data.type == protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH) {
                return data;
            }
            if (data.type == protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.SIPT_BOTH_CHECK) {
                return data;
            }
            else if (data.type == protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_SELF) {
                if (toPlayerId != null && toPlayerId.equals(data.PlayerIID)) {
                    return data;
                }
                else {
                    let decode = this.DeepCopy(protoMsg_1.DcgProto.S_PlayerExcavated, data);
                    for (let i = 0; i < decode.CheckCards.length; i++) {
                        decode.CheckCards[i].CfgId = 0;
                    }
                    return decode;
                }
            }
            return data;
        }
        if (data instanceof protoMsg_1.DcgProto.S_PlayerSceneEvent) {
            return data;
        }
        _Dcg_1.gLog.err("not find convert to player  " + data.constructor.name);
        return data;
    }
    IsBlackArea(area) {
        if (area == protoMsg_1.DcgProto.E_AREA_TYPE.AT_DECK) {
            return true;
        }
        if (area == protoMsg_1.DcgProto.E_AREA_TYPE.AT_DEFENSE) {
            return true;
        }
        if (area == protoMsg_1.DcgProto.E_AREA_TYPE.AT_DIGITAMA) {
            return true;
        }
        return false;
    }
    DeepCopy(type, data) {
        let buffer = type.encode(data).finish();
        let decode = type.decode(buffer);
        return decode;
    }
}
exports.DtcgConvertMessage = DtcgConvertMessage;
//# sourceMappingURL=DtcgConvertMessage.js.map