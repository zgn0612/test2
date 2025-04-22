/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
import { DtCard } from "../Card/DtCard";
import { DtBuffType, DtPlayerLogType } from "../Data/DtEnum";
import { DtPlayer } from "./DtPlayer";
export declare class DtPlayerRoundData {
    private player;
    private player_round_evo_count;
    private player_round_attack_cout;
    playerLog: DcgProto.IS_BattlePlayerTask;
    globalCard: DtCard;
    startElapsedTime: number;
    TimeoutResidue: number;
    startChangeCardState: number;
    clientGameEvent: number;
    startCardId: Long;
    replayTimeOut: boolean;
    constructor(player: DtPlayer);
    PlayerRoundStart(): void;
    AddPlayerEvoCount(): void;
    GetPlayerRoundvoCount(): number;
    AddPlayerAttack(): void;
    GetPlayerAttack(): number;
    HasBuff(buff: DtBuffType): boolean;
    GetCurrentBuffs(): Array<number>;
    AddLogCount(type: DtPlayerLogType): void;
    GetRemainingTime(): number;
}
