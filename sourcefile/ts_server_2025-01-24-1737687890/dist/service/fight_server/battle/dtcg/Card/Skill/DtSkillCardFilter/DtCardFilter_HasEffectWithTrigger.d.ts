import { DtCardBase } from "../../DtCardBase";
import { DtEffectType } from "../../Effect/DtEffectType";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_HasEffectWithTrigger extends DtSkillCardFiterBase {
    private effectTrigger;
    constructor(trigger: DtEffectType);
    OnFilterCard(card: DtCardBase): boolean;
}
