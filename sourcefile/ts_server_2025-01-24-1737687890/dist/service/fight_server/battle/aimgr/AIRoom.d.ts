/// <reference types="long" />
import { Long } from "../../cmn/proto/Long";
import { DcgProto } from "../../cmn/proto/protoMsg";
import { BattleManagerWithMsg } from "../../cmn/roomMgr";
import { DtPlayer } from "../dtcg/Player/DtPlayer";
export declare class AIRoom {
    parent: BattleManagerWithMsg;
    roomId: Long;
    private AI_A;
    private AI_B;
    CheckBattleNeedAI(roomData: DcgProto.IS_RoomData, parent: BattleManagerWithMsg): void;
    RunMsg(msg: DcgProto.IS_RoomFight): void;
    HasAI(): boolean;
    AISetGameMainInit(player: DtPlayer): void;
    CheckAINeedChangeCards(player: DtPlayer): boolean;
    IsWaitAI(): boolean;
    RunAI(): void;
    Clear(): void;
}
