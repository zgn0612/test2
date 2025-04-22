import { DtCardDigimonType } from "../../../Data/DtCardDigimonType";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_FeatureIs extends DtSkillCardFiterBase {
    private feature;
    constructor(...name: DtCardDigimonType[]);
    OnFilterCard(card: DtCardBase): boolean;
}
