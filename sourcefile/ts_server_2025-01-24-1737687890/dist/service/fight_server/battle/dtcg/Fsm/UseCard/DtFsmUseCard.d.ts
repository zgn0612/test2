import { DtCardBase } from "../../Card/DtCardBase";
import { DtAreaType } from "../../Data/DtEnum";
import { DtProtoEnum_MoveReason } from "../../Message/DtMessageData";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtFsmBaseMachine } from "../Base/DtFsmBaseMachine";
import { DtFsmUseCard_BaseState } from "./states/DtFsmUseCard_BaseState";
export declare class DtFsmUseCard extends DtFsmBaseMachine<DtFsmUseCard_BaseState> {
    player: DtPlayer;
    card: DtCardBase;
    useWhere: DtAreaType;
    useCost: boolean;
    onEffect: boolean;
    useReason: DtProtoEnum_MoveReason;
    stateActiveToBattle: boolean;
    cardPlayIndex: number;
    private changeCost;
    private forceSetCost;
    protected InitAddStates(): void;
    SetUseCard(caster: DtCardBase, player: DtPlayer, usecard: DtCardBase, usecost: boolean, onEffect: boolean, reason: DtProtoEnum_MoveReason): DtFsmUseCard;
    IsRunning(): boolean;
    ForceOver(): void;
    SetChangeCost(cost: number): void;
    ForceSetCost(cost: number): void;
    GetPlayCost(): number;
    Clear(): void;
    ShowLog(): void;
}
