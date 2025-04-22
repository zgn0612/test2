/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DcgProto } from "../../../../cmn/proto/protoMsg";
import { DtBattlePhase } from "../../Data/DtEnum";
import { DtBattleManager } from "../../DtBattleManager";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtFsmBaseMachine } from "../Base/DtFsmBaseMachine";
import { DtFsmGameMain_BaseState } from "./States/DtFsmGameMain_BaseState";
export declare class DtFsmGameMain extends DtFsmBaseMachine<DtFsmGameMain_BaseState> {
    playerList: Array<DtPlayer>;
    needCheckPlayerTurnOver: boolean;
    curRound: number;
    curTrunPlayerId: Long;
    curCost: number;
    refereePlayer: DtPlayer;
    gameInitPlaybackData: DcgProto.S_ReplayBattleData;
    constructor(manager: DtBattleManager);
    protected InitAddStates(): void;
    GetCurrentPhasePlayer(): DtPlayer;
    GetOppPhasePlayer(): DtPlayer;
    GetPlayer(uId: Long): DtPlayer;
    GetOppPlayer(uId: Long): DtPlayer;
    GetGameCurrentPhase(): DtBattlePhase;
    SetNextState(): void;
    CheckPlayerCanHatch(playerId: Long): boolean;
    CheckPlayerCanPlayCard(playerId: Long): boolean;
    CheckPlayerCanAttack(playerId: Long): boolean;
    SetCost(cost: number, needCheckTurnover: boolean): void;
    UseCost(cost: number): void;
    Clear(): void;
    ShowLog(): void;
}
