import { ATemplateData } from "./ATemplateData";
import { AtreeRoot } from "./AtreeRoot";
export declare abstract class ANode {
    protected root: AtreeRoot;
    protected parent: ANode;
    protected childNodes: Array<ANode>;
    protected childCount: number;
    constructor(root: AtreeRoot);
    Evaluate(data: ATemplateData): boolean;
    protected abstract _DoEvaluate(data: ATemplateData): boolean;
    AddChildNode(node: ANode): ANode;
    RemoveNode(node: ANode): void;
    SetParent(p: ANode): void;
    protected Log(data: ATemplateData, log: string): void;
    protected LogError(data: ATemplateData, log: string): void;
}
