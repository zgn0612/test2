/// <reference types="long" />
import { Long } from "../../../../../cmn/proto/Long";
import { LgBattleScene } from "../../../aibattle/LgBattleScene";
import { AiFilterArea, AiFilterCompare, AiFilterContainerType } from "../../Atree/ADefine";
import { AtreeRoot } from "../../Atree/AtreeRoot";
import { AIcfgBase } from "../AIcfgBase";
export default class AICfg_testttt extends AIcfgBase {
    eCompare1: AiFilterCompare;
    eArea1: AiFilterArea;
    containerType: AiFilterContainerType;
    GetAITreeRoot(root: LgBattleScene, playerid: Long): AtreeRoot;
}
