import { AiCardBattleState, AiCardType, AiFilterArea, AiFilterCompare, AiFilterContainerType } from "../ADefine";
import { ANode } from "../ANode";
import { ATemplateData } from "../ATemplateData";
export declare class AICon_base extends ANode {
    nParam1: number;
    sParam1: string;
    eCompare1: AiFilterCompare;
    eArea1: AiFilterArea;
    containerType: AiFilterContainerType;
    sParam2: string;
    eBattleSatate: AiCardBattleState;
    eCardType: AiCardType;
    nParam2: number;
    protected _DoEvaluate(data: ATemplateData): boolean;
    protected ISInCompare(compare: AiFilterCompare, num1: number, num2: number): boolean;
}
