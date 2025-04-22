/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtAreaType } from "../../Data/DtEnum";
import { DtMsgBase } from "../../Data/DtEventMsg";
import { ClientShowType, DtSkillDesc } from "../../Message/DtMessageData";
import { DtBuffBase } from "../Buff/DtBuffBase";
import { DtCardBase } from "../DtCardBase";
import { DtSkillBase } from "../Skill/DtSkillBase";
import { DtSkillCustom } from "../Skill/DtSkillCustom";
import { DtEffectBase } from "./DtEffectBase";
import { DtEffectCreator } from "./DtEffectCreator";
import { DtEffectType } from "./DtEffectType";
import { DtConBase } from "./TriggerCondition/DtConBase";
export declare enum DtEffectOtherType {
    None = 0,
    OneTurnOnce = 1,
    Immediately = 2,
    OneTurnMore = 4,
    OneTimeingMore = 8
}
export declare enum DtEffectResult {
    None = 0,
    WaitForChoose = 1,
    Next = 2
}
export declare class DtEffect extends DtEffectBase {
    private useState;
    name: number;
    protected creator: DtEffectCreator;
    triggerType: DtEffectType;
    private otherType;
    private otherTypeParam;
    private triggerArea;
    private TriggerConData;
    private ConditionFunc;
    private InitFunc;
    private listSkill;
    private currentSetSkillGroup;
    private skillGroup;
    private state;
    private waitForPlayer;
    onEffectRound: number;
    onUseCount: number;
    isOrigion: boolean;
    eventMsg: DtMsgBase;
    activateAsk: boolean;
    inherit: boolean;
    private bindOnceTurnOnceEffect;
    constructor(parent: DtCardBase, creator: DtEffectCreator);
    GetCreateor(): DtEffectCreator;
    SetTriggerCondition(data: DtConBase): void;
    SetCondition(func: (effect?: DtEffect) => boolean): void;
    SetInitFunc(func: (effect?: DtEffect) => void): void;
    CheckTriggerCondition(msg: DtMsgBase): boolean;
    BindOnceTurnOnceEffect(effect: DtEffect): void;
    CheckFreLimitCanUse(checkBindCard?: boolean): boolean;
    CheckAllCondition(): boolean;
    ChainCheckCondition(): boolean;
    HasCondition(): boolean;
    PreCheckPlayerUsefulActivate(): boolean;
    SetEffectGroup(groupName: string, con: (effect: DtEffect) => boolean, func: (effect: DtEffect) => void): void;
    SetEffect(onEffect: (effect?: DtEffect, skill?: DtSkillBase) => DtEffectResult, onChoose: (any: Long | Long[], effect?: DtEffect) => void, obj?: any): DtSkillCustom;
    RegisterSkill(skill: DtSkillBase): DtSkillBase;
    private CheckRegisterSkillFromGroup;
    SetEffectActivateAsk(): void;
    OnEffect(canImmediately?: boolean): boolean;
    OnTick(): void;
    OnPlayerChooseOne(uid: Long): void;
    OnPlayerChooseMul(uids: Long[]): void;
    ReturnToThePreviousStep(): void;
    SetToStateStepWithStageId(stageid: number): void;
    GetNextSkillWithSkill(skill: DtSkillBase): DtSkillBase;
    private GetCurrentRound;
    SetOtherType(type: DtEffectOtherType, param?: number): void;
    SetTriggerType(type: DtEffectType): void;
    CheckOtherTypeIs(e: DtEffectOtherType): boolean;
    GetOtherType(): DtEffectOtherType;
    SetTriggerArea(type: DtAreaType): void;
    SetTriggerAreaAllExceptDigitama(): void;
    ForceOver(): void;
    AddNewBuffTo(buff: DtBuffBase, card: DtCardBase): void;
    AddInheritBuffTo(buff: DtBuffBase, card: DtCardBase): void;
    SetEffectDirect(): void;
    CheckCanSetListener(cardArea: DtAreaType): boolean;
    GetTriggerType(): DtEffectType;
    UpdateInheritDataBy(inheritEff: {
        onEffectRound: number;
        onUseCount: number;
    }): void;
    CheckActivatePosition(): boolean;
    private CheckMonsterNoneArea;
    GetActiveNeedAsk(): boolean;
    lstShowType: ClientShowType;
    private ClientShow;
    private GetClientCardArr;
    ShowLog(): string;
    GetLastEffectRunResult(skill: DtSkillBase): boolean;
    private ClearBug;
    Clear(): void;
    GetActivateCard(): DtCardBase;
    GetRealityOriginCard(): DtCardBase;
    private GetOfferEffectCard;
    private useOtherEffect;
    UseOtherEffect(effect: DtEffect): void;
    ForceUseCheckCondition(): boolean;
    OnForceUse(): boolean;
    OnTickOtherEffect(): boolean;
    GetSkillDesc(): Array<DtSkillDesc>;
    CheckLog(): void;
    private SkillDescCall;
    private CheckRepeat;
}
