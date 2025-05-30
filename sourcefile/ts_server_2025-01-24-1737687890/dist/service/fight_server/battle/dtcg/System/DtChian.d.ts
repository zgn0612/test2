/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DtCardBase } from "../Card/DtCardBase";
import { DtActionEffectType } from "../Data/DtEnum";
import { DtTriggerEffectWithMsg } from "../DtTriggerEffectWithMsg";
import { DtFsmActionEffect } from "../Fsm/ActionEffect/DtFsmActionEffect";
import { DtFsmActionEffectManager } from "../Fsm/ActionEffect/DtFsmActionEffectManager";
import { DtFsmEvolution } from "../Fsm/Evolution/DtFsmEvolution";
import { DtFsmUseCard } from "../Fsm/UseCard/DtFsmUseCard";
import { DtProtoEnum_MoveReason } from "../Message/DtMessageData";
import { DtPlayer } from "../Player/DtPlayer";
import { DtChainFunc } from "./DtChainFunc";
import { DtSystemChian } from "./DtSystemChian";
export declare class DtChian {
    private parent;
    private currentExecuteBeforeTrigger;
    private listTriggerEffect;
    private curTriggers;
    fsmActionMgr: DtFsmActionEffectManager;
    private playerSelect;
    fsmEvo: DtFsmEvolution;
    fsmUseCard: DtFsmUseCard;
    funcs: Array<DtChainFunc>;
    isHighPriority: boolean;
    private useFulTriggers;
    constructor(system: DtSystemChian);
    OnChainActionEffectAndEvo(showlog: boolean): boolean;
    RunFunc(): boolean;
    OnChainUseNotMagicCard(showlog: boolean): boolean;
    OnChainUseMagicCard_Process_cardEffect(showlog: boolean): boolean;
    OnEndChainUseCard(showlog: boolean): boolean;
    OnChainBeforeExecuteTrigger(showlog: boolean): boolean;
    OnTick(showlog: boolean): void;
    private PlayerSelectEffectActive;
    private ActivateCardEffect;
    private RemoveEffect;
    IsOver(): boolean;
    SetCardsActiveEffect(effs: Array<DtTriggerEffectWithMsg>): void;
    CanSetFsmAction(player: DtPlayer, casterCard: DtCardBase, effType: DtActionEffectType): boolean;
    SetCardFsmActionEffect(player: DtPlayer, casterCard: DtCardBase, receiveCard: DtCardBase, effType: DtActionEffectType, param: number): DtFsmActionEffect;
    PushCardFsmActionEffect(player: DtPlayer, casterCard: DtCardBase, receiveCard: DtCardBase, effType: DtActionEffectType, param: number): DtFsmActionEffect;
    SetEvo(player: DtPlayer, evoCard: DtCardBase, oriCard: DtCardBase, cost: number): DtFsmEvolution;
    SetFusionEvolution(player: DtPlayer, evoCard: DtCardBase, topCard: DtCardBase, bottomCard: DtCardBase, cost: number): void;
    SetPlayerUseCard(caster: DtCardBase, player: DtPlayer, card: DtCardBase, useCost: boolean, onEffect: boolean, reason: DtProtoEnum_MoveReason): DtFsmUseCard;
    SetFunc(func: DtChainFunc): void;
    OnPlayerChooseOne(uid: Long): boolean;
    OnPlayerChooseMul(uids: Long[]): boolean;
    OnPlayerChooseEffectActivateSortOrCancel(activates: Array<number>, cancels: Array<number>): void;
    private GetEffectWithPlayerChoose;
    private RemoveEffectWithPlayerChoose;
    UpdateTriggerEffectEvoCard(evoCard: DtCardBase, oriCard: DtCardBase): void;
    private GetSameEffect;
    Clear(): void;
}
