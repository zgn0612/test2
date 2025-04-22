/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
export declare class DtcgMessageFromClient {
    static SendToMsg(param: DcgProto.IS_BattleParams, playerid: Long): void;
    static SetDigiTamaHatch(playerId: Long): DcgProto.IS_BattleParams;
    static DigimonCardUse(playerId: Long, cardId: Long, index: number): DcgProto.IS_BattleParams;
    static SetNextTurn(playerId: Long): DcgProto.IS_BattleParams;
    static OnDigimonBattle(playerId: Long, atkCardId: Long, defCardId: Long): DcgProto.IS_BattleParams;
    static OnDigimonAttackDefense(playerId: Long, atkCardId: Long): DcgProto.IS_BattleParams;
    static OnDigimonEvo(playerId: Long, evoCard: Long, originCard: Long, cost: number): DcgProto.IS_BattleParams;
    static OnPlayerChooseMsg(playerId: Long, uid: Long, reqid: number): DcgProto.IS_BattleParams;
    static OnPlayerSeq(playerId: Long, uids: Long[], reqid: number): DcgProto.IS_BattleParams;
    static PlayerUseDigimonInBattleEffect(playerId: Long, cardUID: Long): DcgProto.IS_BattleParams;
    static PlayerFusionEvo(playerId: Long, cardUID: Long): DcgProto.IS_BattleParams;
    static OnGameEventPrepared(playerId: Long, eventid: number): DcgProto.IS_BattleParams;
    static OnPlayerActiveEffect(playerId: Long, actives: Array<number>, cancel: Array<number>, reqid: number): DcgProto.IS_BattleParams;
}
