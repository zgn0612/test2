import { DtFilterCompare } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_OriginCards extends DtSkillCardFiterBase {
    private type;
    private count;
    constructor(equalType: DtFilterCompare, count: number);
    OnFilterCard(card: DtCardBase): boolean;
}
