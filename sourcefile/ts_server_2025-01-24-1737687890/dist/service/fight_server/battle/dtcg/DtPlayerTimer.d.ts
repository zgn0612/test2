/// <reference types="long" />
import { Long } from "../../cmn/proto/Long";
import { DtBattleManager } from "./DtBattleManager";
import { DtPlayer } from "./Player/DtPlayer";
export declare class DtPlayerTimer {
    private manager;
    private outtime;
    private isRunning;
    private currentElapsedTimePlayerId;
    isInAutoSkip: boolean;
    GameEndTime: number;
    replayTimeOut: boolean;
    private isPause;
    private pauseMaxTime;
    constructor(manager: DtBattleManager);
    IsRunning(): boolean;
    GetCurrentServerTime(): number;
    SetGameTimeOut(sec: any): void;
    SetPlayerTimeoutResidue(player: DtPlayer, sec: any): void;
    StartPlayerRoundTimeOut(player: DtPlayer): void;
    PlayerAnimationPlayOver(player: DtPlayer): void;
    GetCurrnetOutTime(): number;
    IsTimeOut(): boolean;
    IsGameEnd(): boolean;
    IsPause(): boolean;
    ResetCurrentPlayer(): void;
    IsElapsedPlayerId(playerId: Long): boolean;
    GMResetCurrentTime(sec: any): void;
}
