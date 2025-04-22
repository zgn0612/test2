import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CanUse extends DtSkillCardFiterBase {
    constructor();
    OnFilterCard(card: DtCardBase): boolean;
}
