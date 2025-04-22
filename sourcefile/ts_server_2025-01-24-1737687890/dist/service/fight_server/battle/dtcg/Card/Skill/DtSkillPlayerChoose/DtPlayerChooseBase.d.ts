import { DtCompareExtend, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtProtoEnum_Compare } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillBase } from "../DtSkillBase";
export declare class DtPlayerChooseCardInfo {
    card: DtCardBase;
    isused: boolean;
    constructor(card: DtCardBase, used: boolean);
}
export declare class DtPlayerChooseBase {
    private parent;
    private selectPlayer;
    private type;
    compareExtend: DtCompareExtend;
    private typeNum;
    private active;
    private canCancel;
    private obj;
    private initEvent;
    equalModeFailIfNotSatisfield: boolean;
    constructor(parent: DtSkillBase, selecter: DtSkillTargetToPlayer, type: DtProtoEnum_Compare, num: number, canCancel: boolean);
    OnSendPlayerChoose(chooseCards: Array<DtPlayerChooseCardInfo>): boolean;
    private GetChoosePlayer;
    GetParentEffect(): import("../../Effect/DtEffect").DtEffect;
    SetInitEvent(obj: any, func: (choose: DtPlayerChooseBase) => void): void;
    ChangeTypeNum(num: number): void;
    SetActive(active: boolean): void;
    SetCanCancel(can: boolean): void;
    GetCompare(): DtProtoEnum_Compare;
    GetNum(): number;
    IsActive(): boolean;
    GetChooseType(): DtSkillTargetToPlayer;
}
