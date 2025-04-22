/// <reference types="long" />
import { Long } from "../../cmn/proto/Long";
import { LgBattleScene } from "../ai/aibattle/LgBattleScene";
import { AI } from "./AI";
import { AIServerCammand } from "../ai/ailogic/Atree/ADefine";
import { AIRoom } from "./AIRoom";
export declare class AIRoot {
    private aiRoom;
    private uid;
    private battleScene;
    private state;
    private tickTag;
    private time;
    private calTime;
    private runningTick;
    AI: AI;
    private cammand;
    constructor(uid: Long, aiRoom: AIRoom);
    Init(): void;
    registNotifyWithFunc(scene: LgBattleScene): void;
    Run(): void;
    private RunAI;
    AIPrerunning(id: Long): void;
    private IsFree;
    SetCammand(cammand: AIServerCammand): void;
    GetAIPlayerId(): Long;
    GetBattleScene(): LgBattleScene;
    Log(): void;
    IsWaitAI(): boolean;
    private ClearTick;
    Clear(): void;
}
