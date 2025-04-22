import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillPlayerChoose } from "../DtSkillPlayerChooseBase";
export declare class DtSkillCardFiterBase {
    parentSkillPlayerChoose: DtSkillPlayerChoose;
    parentCard: DtCardBase;
    effect: DtEffect;
    OnFilterCard(card: DtCardBase): boolean;
}
