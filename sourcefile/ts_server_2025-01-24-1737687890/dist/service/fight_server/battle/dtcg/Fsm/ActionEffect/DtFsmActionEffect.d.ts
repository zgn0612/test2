/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtCardBase } from "../../Card/DtCardBase";
import { DtActionEffectType } from "../../Data/DtEnum";
import { DtProtoEnum_MoveReason } from "../../Message/DtMessageData";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtFsmBaseMachine } from "../Base/DtFsmBaseMachine";
import { DtFsmActionEffect_BaseState } from "./States/DtFsmActionEffect_BaseState";
export declare class DtFsmActionEffect extends DtFsmBaseMachine<DtFsmActionEffect_BaseState> {
    player: DtPlayer;
    caster: DtCardBase;
    receiveCard: DtCardBase;
    actionEffectType: DtActionEffectType;
    param: number;
    reason: DtProtoEnum_MoveReason;
    extraOtherCard: DtCardBase;
    effectParam: Long;
    DegCallBack: (c: DtCardBase) => void;
    EndCallBack: (success: boolean) => void;
    protected InitAddStates(): void;
    SetCardBeEffect(player: DtPlayer, caster: DtCardBase, receive: DtCardBase, effType: DtActionEffectType, param: number): DtFsmActionEffect;
    IsRunning(): boolean;
    ForceOver(): void;
    IsImmueEffect(): boolean;
    OnPlayerChoose(uid: Long): void;
    SetEndCallBack(call: (success: boolean) => void): void;
    ShowLog(): void;
}
