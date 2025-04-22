import { DtFilterCompare } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardColorCount extends DtSkillCardFiterBase {
    private compare;
    private count;
    constructor(compare: DtFilterCompare, count: number);
    OnFilterCard(card: DtCardBase): boolean;
}
