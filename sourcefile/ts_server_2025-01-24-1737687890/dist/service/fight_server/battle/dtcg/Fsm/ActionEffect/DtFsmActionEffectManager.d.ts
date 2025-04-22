/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtCardBase } from "../../Card/DtCardBase";
import { DtActionEffectType } from "../../Data/DtEnum";
import { DtBattleManager } from "../../DtBattleManager";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtFsmActionEffect } from "./DtFsmActionEffect";
export declare class DtFsmActionEffectManager {
    private manager;
    private state;
    private pool;
    private allFsmActions;
    private curFsmAction;
    private player;
    private caster;
    private actionEffectType;
    constructor(manager: DtBattleManager);
    CanPushEffect(player: DtPlayer, casterCard: DtCardBase, effType: DtActionEffectType): boolean;
    SetCardBeEffect(player: DtPlayer, casterCard: DtCardBase, receiveCard: DtCardBase, effType: DtActionEffectType, param: number): DtFsmActionEffect;
    PushCardBeEffect(player: DtPlayer, casterCard: DtCardBase, receiveCard: DtCardBase, effType: DtActionEffectType, param: number): DtFsmActionEffect;
    private GetFree;
    OnTick(): void;
    private SetCurrentActEff;
    private GetAllReceiveCards;
    IsRunning(): boolean;
    OnPlayerChoose(uid: Long): boolean;
    ForceOverEffect(receiveCard: DtCardBase): void;
    ShowLog(): void;
    Clear(): void;
}
