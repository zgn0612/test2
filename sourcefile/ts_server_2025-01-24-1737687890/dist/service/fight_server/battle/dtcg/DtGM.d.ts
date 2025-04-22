/// <reference types="long" />
import { Long } from "../../cmn/proto/Long";
import { DtBattleManager } from "./DtBattleManager";
export declare class DtGM {
    private manager;
    private testId;
    constructor(mgr: DtBattleManager);
    OnGm(playerid: Long, gm: string): boolean;
    private SetCard;
    AIGM(playerid: Long, str: string): boolean;
    GMClient(playerid: Long, str: string, ...params: string[]): boolean;
    private SimpleEvo;
    private GetBattleCard;
    private UpdateGameBattleInfo;
    private GetCardId;
    private RunSimpleAI;
    private ExecutePhaseForsterAI;
    private ExecuteMainAI;
    private ExecutePlayerChooseAI;
    private ExecuteDefenseSelectAI;
    private ExecuteSelectOptionAI;
    private ExecutePlayerSelectActivateAI;
}
