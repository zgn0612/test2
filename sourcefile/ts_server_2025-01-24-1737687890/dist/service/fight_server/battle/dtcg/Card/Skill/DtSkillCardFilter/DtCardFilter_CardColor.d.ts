import { DtCardColor } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardColor extends DtSkillCardFiterBase {
    private colorType;
    constructor(...type: DtCardColor[]);
    OnFilterCard(card: DtCardBase): boolean;
}
