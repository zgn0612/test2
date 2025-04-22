import { DtFilterCompare } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardDP extends DtSkillCardFiterBase {
    private type;
    private dp;
    private obj;
    private initEvent;
    constructor(equalType: DtFilterCompare, dp: number);
    SetInitEvent(obj: any, func: (choose: DtCardFilter_CardDP) => void): DtCardFilter_CardDP;
    SetDp(dp: number): void;
    OnFilterCard(card: DtCardBase): boolean;
    private GetAddDP;
}
