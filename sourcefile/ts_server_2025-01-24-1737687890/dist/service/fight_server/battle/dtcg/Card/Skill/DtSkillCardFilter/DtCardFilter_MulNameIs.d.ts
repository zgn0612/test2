import { DtCardDigimonType } from "../../../Data/DtCardDigimonType";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_MulNameIs extends DtSkillCardFiterBase {
    private names;
    private force;
    constructor(force: boolean, ...name: DtCardDigimonType[]);
    OnFilterCard(card: DtCardBase): boolean;
}
