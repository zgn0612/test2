/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { LgBattleScene } from "../../aibattle/LgBattleScene";
import { AtreeRoot } from "../Atree/AtreeRoot";
export declare class AIcfgBase {
    GetAITreeRoot(root: LgBattleScene, playerid: Long): AtreeRoot;
}
