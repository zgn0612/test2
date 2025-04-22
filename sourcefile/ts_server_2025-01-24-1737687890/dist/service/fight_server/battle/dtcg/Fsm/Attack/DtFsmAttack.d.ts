/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtCardBase } from "../../Card/DtCardBase";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtFsmBaseMachine } from "../Base/DtFsmBaseMachine";
import { DtFsmAttackType } from "./DtFsmAttackEnum";
import { DtFsmAttack_BaseState } from "./States/DtFsmAttack_BaseState";
export declare class DtFsmAttack extends DtFsmBaseMachine<DtFsmAttack_BaseState> {
    attackPlayer: DtPlayer;
    atkCard: DtCardBase;
    defCard: DtCardBase;
    attackType: DtFsmAttackType;
    defenseAreaCard: DtCardBase;
    listSelect: Array<DtCardBase>;
    defAttackCount: number;
    protected InitAddStates(): void;
    SetAttack(atkPlayer: DtPlayer, atkCard: DtCardBase, defCard: DtCardBase, type: DtFsmAttackType): void;
    IsRunning(): boolean;
    AttackOver(): void;
    IsDefenseSelectState(): boolean;
    OnDefenseClick(uid: Long): void;
    ChangeAttackTarget(card: DtCardBase): void;
    SkipDefenseAttackJudge(): void;
    ClientShowAttackJudge(attackType: DtFsmAttackType, isOver: boolean): void;
    ClientShowAttackOver(): void;
    GameOver(): void;
    Clear(): void;
    ShowLog(): void;
}
