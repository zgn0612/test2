import { DtCardBase } from "../../DtCardBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_EffectHas extends DtSkillCardFiterBase {
    private effectName;
    constructor(name: number);
    OnFilterCard(card: DtCardBase): boolean;
}
