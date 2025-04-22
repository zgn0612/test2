/// <reference types="long" />
import { Long } from "../../cmn/proto/Long";
import { DtCardBase } from "./Card/DtCardBase";
import { DtEffect, DtEffectOtherType } from "./Card/Effect/DtEffect";
import { DtEffectCreator } from "./Card/Effect/DtEffectCreator";
import { DtEffectType } from "./Card/Effect/DtEffectType";
import { DtMsgBase } from "./Data/DtEventMsg";
export declare class DtTriggerEffectWithMsg {
    effect: DtEffect;
    msg: DtMsgBase;
    currentChainId: number;
    EffectIndex: number;
    private state;
    constructor(eff: DtEffect, msg: DtMsgBase);
    get parent(): DtCardBase;
    get effectDirect(): boolean;
    OnTick(): void;
    CheckAllCondition(): boolean;
    ChainCheckCondition(): boolean;
    HasCondition(): boolean;
    PreCheckPlayerUsefulActivate(): boolean;
    OnEffect(canImmediately: boolean): boolean;
    IsOver(): boolean;
    GetTriggerType(): DtEffectType;
    GetOtherType(): DtEffectOtherType;
    CheckOtherTypeIs(e: DtEffectOtherType): boolean;
    OnPlayerChooseOne(uid: Long): void;
    OnPlayerChooseMul(uids: Long[]): void;
    CheckActivatePosition(): boolean;
    GetActiveNeedAsk(): boolean;
    GetCreateor(): DtEffectCreator;
    GetActivateCard(): DtCardBase;
    GetRealityOriginCard(): DtCardBase;
    SetCardInTrigger(): void;
    Clear(): void;
}
