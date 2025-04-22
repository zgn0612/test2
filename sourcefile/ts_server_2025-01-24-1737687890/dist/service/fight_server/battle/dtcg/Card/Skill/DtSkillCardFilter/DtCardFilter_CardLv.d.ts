import { DtFilterCompare } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardLv extends DtSkillCardFiterBase {
    private type;
    private lv;
    constructor(equalType: DtFilterCompare, lv: number);
    OnFilterCard(card: DtCardBase): boolean;
}
