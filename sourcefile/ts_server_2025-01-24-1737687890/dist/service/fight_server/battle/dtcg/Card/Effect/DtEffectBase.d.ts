/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtMsgBase } from "../../Data/DtEventMsg";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtEffectType } from "./DtEffectType";
export declare class DtEffectBase {
    effectIndex: number;
    chianId: number;
    parent: DtCardBase;
    protected isOver: boolean;
    effectDirect: boolean;
    constructor(parent: DtCardBase);
    OnEffect(canImmediately?: boolean): boolean;
    OnTick(): void;
    SetCardInTrigger(): void;
    IsOver(): boolean;
    OnPlayerChooseOne(uid: Long): void;
    OnPlayerChooseMul(uids: Long[]): void;
    CheckActivatePosition(): boolean;
    GetActiveNeedAsk(): boolean;
    GetCardInList(list: Array<DtCardBase>, uid: Long): DtCardBase;
    private checkSameFunc;
    CheckSameChainMsg(a: DtMsgBase, b: DtMsgBase): any;
    SetCheckSameChainCall(func: (a: DtMsgBase, b: DtMsgBase) => DtMsgBase): void;
    private PlayerNotActivate;
    PlayerChooseCancelActivate(): any;
    SetPlayerCancelActivateCall(func: Function): void;
    GetTriggerType(): DtEffectType;
    CanActiveWithCheckChain(): boolean;
    GetCurrentSysChainId(): number;
    ShowLog(): string;
    GetPlayer(): DtPlayer;
    Clear(): void;
}
