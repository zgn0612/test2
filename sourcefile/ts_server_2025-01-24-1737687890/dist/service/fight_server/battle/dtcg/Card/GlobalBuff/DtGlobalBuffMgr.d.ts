import { DcgProto } from "../../../../cmn/proto/protoMsg";
import { DtBuffType } from "../../Data/DtEnum";
import { DtBattleManager } from "../../DtBattleManager";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtGlobalBuffBase } from "./DtGlobalBuffBase";
import { DtGlobalPlayerBuffBase } from "./DtGlobalPlayerBuffBase";
export declare class DtGlobalBuffMgr {
    private manager;
    private buffList;
    private playerBuffs;
    constructor(mgr: DtBattleManager);
    Get2ClientMessageMgr(): import("../../Message/DtcgMessage2Client").DtcgMessage2Client;
    AddCardAreaBuff(buff: DtGlobalBuffBase): void;
    AddPlayerBuff(buff: DtGlobalPlayerBuffBase): void;
    CheckUnusedGlobalBuff(): void;
    RemoveCardBuff(buff: DtGlobalBuffBase): void;
    CheckCardInt(card: DtCardBase, type: DtBuffType): number;
    CheckCanChange(buff: DtGlobalBuffBase, card: DtCardBase, type: DtBuffType): boolean;
    CheckBeEffectBuff(card: DtCardBase, type: DtBuffType, checkAffected: boolean): boolean;
    ForEachBuffs(card: DtCardBase, func: (type: DtBuffType, num: number) => void): void;
    CheckPlayerBuff(player: DtPlayer, buff: DtBuffType): boolean;
    CheckPlayerBuffInt(player: DtPlayer, buff: DtBuffType, card: DtCardBase): number;
    GetPlayerBuff(player: DtPlayer): Array<number>;
    GetReconnectData(): Array<DcgProto.S_ReconnectGlobalBuff>;
    Clear(): void;
}
