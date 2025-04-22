import { DtAreaType, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillPlayerChoose } from "../DtSkillPlayerChooseBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtSkillCardFiterMachine {
    private parent;
    private type;
    private findPlayer;
    private findArea;
    private OnGetCardsEvent;
    private cardFilters;
    private OnFilterCardEvent;
    constructor(parent: DtSkillPlayerChoose);
    SetFilter(filter: DtSkillCardFiterBase): void;
    GetCardsWitchAreaData(targetPlayer: DtSkillTargetToPlayer, ...area: DtAreaType[]): void;
    GetCardsWitchCustom(func: (effect: DtEffect) => Array<DtCardBase>): void;
    GetCardsFromSelfOrigin(): void;
    OnFiltercards(): Array<DtCardBase>;
    private PushList;
    private ConditionCard;
    get EffectToPlayer(): DtSkillTargetToPlayer;
    get EffectArea(): DtAreaType[];
    GetFilterCardTypes(): Array<number>;
}
