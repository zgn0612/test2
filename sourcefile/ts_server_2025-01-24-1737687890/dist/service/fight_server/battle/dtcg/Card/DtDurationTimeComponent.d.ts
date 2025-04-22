/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DtBuffDurationType } from "../Data/DtEnum";
import { DtBattleManager } from "../DtBattleManager";
export declare class DtDurationTimeComponent {
    private manager;
    private playerId;
    private buffDurationType;
    private buffDurationParam;
    private buffOverCallBack;
    private callObj;
    constructor(manager: DtBattleManager, playerId: Long, buffOver: () => void, obj: any);
    SetBuffDuration(type: DtBuffDurationType, param?: number): void;
    private SetBuffListen;
    private RoundOverCheck;
    private PhaseActiveOverCheck;
    private ChainEffectOver;
    private RemoveBuff;
    private RemoveBuffListen;
    Clear(): void;
}
