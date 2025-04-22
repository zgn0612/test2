import { ANode } from "../ANode";
import { ATemplateData } from "../ATemplateData";
import { AtreeRoot } from "../AtreeRoot";
export declare class AtestNodeFalse extends ANode {
    private log;
    constructor(root: AtreeRoot, log: string);
    protected _DoEvaluate(data: ATemplateData): boolean;
}
