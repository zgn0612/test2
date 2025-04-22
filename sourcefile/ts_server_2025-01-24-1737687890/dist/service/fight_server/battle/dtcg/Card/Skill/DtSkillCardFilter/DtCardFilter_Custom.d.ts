import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardFiterBase } from "./DtSkillCardFiterBase";
export declare class DtCardFilter_Custom extends DtSkillCardFiterBase {
    private CustomFilterEvent;
    private call;
    constructor(call: any, func: (card: DtCardBase, effect: DtEffect) => boolean);
    OnFilterCard(card: DtCardBase): boolean;
}
