/// <reference types="long" />
import { Long } from "../../../../../cmn/proto/Long";
import { LgBattleScene } from "../../../aibattle/LgBattleScene";
import { AtreeRoot } from "../../Atree/AtreeRoot";
import { AIcfgBase } from "../AIcfgBase";
export default class AICfg_AC9_BT6_060 extends AIcfgBase {
    GetAITreeRoot(root: LgBattleScene, playerid: Long): AtreeRoot;
}
