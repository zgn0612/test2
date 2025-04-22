import { DtAreaType, DtFilterCompare } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardCost extends DtSkillCardFiterBase {
    private type;
    private cost;
    private area;
    constructor(equalType: DtFilterCompare, cost: number, area: DtAreaType);
    OnFilterCard(card: DtCardBase): boolean;
}
