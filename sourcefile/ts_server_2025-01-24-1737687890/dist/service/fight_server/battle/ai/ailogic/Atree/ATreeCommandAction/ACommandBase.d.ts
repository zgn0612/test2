import { ANode } from "../ANode";
import { ATemplateData } from "../ATemplateData";
import { AtreeRoot } from "../AtreeRoot";
export declare class ACommandBase extends ANode {
    priority: number;
    constructor(root: AtreeRoot, priority?: number);
    Evaluate(data: ATemplateData): boolean;
    protected _DoEvaluate(data: ATemplateData): boolean;
}
