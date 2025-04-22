import { DtCardBattleState } from "../../../Data/DtEnum";
import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_CardBattleState extends DtSkillCardFiterBase {
    private battleState;
    constructor(state: DtCardBattleState);
    OnFilterCard(card: DtCardBase): boolean;
}
