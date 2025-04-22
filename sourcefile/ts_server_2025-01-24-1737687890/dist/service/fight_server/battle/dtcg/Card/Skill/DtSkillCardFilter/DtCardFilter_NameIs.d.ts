import { DtCardDigimonType } from "../../../Data/DtCardDigimonType";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_NameIs extends DtSkillCardFiterBase {
    private name;
    private force;
    constructor(name: DtCardDigimonType, isForce?: boolean);
    OnFilterCard(card: DtCardBase): boolean;
}
