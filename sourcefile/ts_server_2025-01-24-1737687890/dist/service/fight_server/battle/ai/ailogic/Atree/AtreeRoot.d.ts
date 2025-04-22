/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { LgBattleScene } from "../../aibattle/LgBattleScene";
import { LgCard } from "../../aibattle/LgCard";
import { LgPlayer } from "../../aibattle/LgPlayer";
import { AICommandType, AIServerCammand } from "./ADefine";
import { ANode } from "./ANode";
import { ATemplateData } from "./ATemplateData";
export declare class AtreeRoot {
    private battleScene;
    aiCardRoot: LgCard;
    private aiId;
    private childNodes;
    private childCount;
    private serverCommands;
    private targetKey;
    private dataSave;
    private target;
    constructor(parent: LgBattleScene, aiId: Long);
    Evaluate(data: ATemplateData, target?: LgCard): void;
    AddChildNode(node: ANode): ANode;
    RemoveNode(node: ANode): void;
    GetHigPriorityCommand(current: AIServerCammand): AIServerCammand;
    ResetDatas(): void;
    GetCammands(): Array<AIServerCammand>;
    SetServerCammand(priority: number, type: AICommandType): AIServerCammand;
    SetServerCammandWithTarget(priority: number, type: AICommandType, target: LgCard): AIServerCammand;
    SetServerCammandWithTargets(priority: number, type: AICommandType, targets: Array<LgCard>): AIServerCammand;
    SetContainerCards(key: string, cards: Array<LgCard>): void;
    GetContainerCards(key: string): Array<LgCard>;
    ClearTargets(): void;
    SetTargets(cards: Array<LgCard>): void;
    GetTarget(): LgCard;
    GetTargets(): Array<LgCard>;
    GetBattleScene(): LgBattleScene;
    GetAIPlayer(): LgPlayer;
    GetOPPlayer(): LgPlayer;
    GetPlayer(pid: any): LgPlayer;
}
