import { DtCardType } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardType extends DtSkillCardFiterBase {
    private cardtype;
    constructor(...type: DtCardType[]);
    OnFilterCard(card: DtCardBase): boolean;
    GetFilterCardType(): DtCardType[];
}
