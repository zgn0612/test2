import { DtBattleManager } from "../../../dtcg/DtBattleManager";
import { DtBuffDurationType, DtBuffType } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffect } from "../Effect/DtEffect";
export declare class DtBuffBase {
    inherit: boolean;
    parent: DtEffect;
    type: DtBuffType;
    targetCard: DtCardBase;
    buffDurationType: DtBuffDurationType;
    buffDurationParam: number;
    private durationComponent;
    constructor();
    IsAffected(): boolean;
    Condition(): boolean;
    GetInt(): number;
    GetAny(): any;
    IsBuffActive(): boolean;
    GetBuffActiveValue(): number;
    SetBuffDurationType(type: DtBuffDurationType, param?: number): DtBuffBase;
    SetBuffListen(manager: DtBattleManager): void;
    private GetThisBuffPlayerId;
    RemoveBuff(): void;
    Clear(): void;
}
