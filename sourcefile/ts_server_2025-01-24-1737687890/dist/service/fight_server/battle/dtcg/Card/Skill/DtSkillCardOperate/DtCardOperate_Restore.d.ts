import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_Restore extends DtSkillCardOperateBase {
    constructor();
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
}
