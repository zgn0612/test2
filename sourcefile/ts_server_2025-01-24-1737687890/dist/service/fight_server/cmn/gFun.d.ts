/// <reference types="long" />
import Singleton from "./Singleton";
import { Icfg_card_basic } from "../cfg/card_basic";
import { DtCardColor } from "../battle/dtcg/Data/DtEnum";
import { DcgProto } from "./proto/protoMsg";
import { DtCardBase } from "../battle/dtcg/Card/DtCardBase";
export default class _gFun extends Singleton {
    fillNum(num: number): string;
    CheckDigimonCanEvo(origin: Icfg_card_basic, evo: Icfg_card_basic): boolean;
    CheckCardColorIs(card: Icfg_card_basic, color: DtCardColor): boolean;
    stringToBytes(str: any): Uint8Array;
    byteToString(byte: any): string;
    private IsArray;
    DeepClone<T>(tSource: T, tTarget?: Record<string, any> | T): T;
    SimpleClone<T>(tSource: T, tTarget?: Record<string, any> | T): T;
    Random(min: number, max: number): number;
    GetPhaseText(phase: DcgProto.E_BATTLE_PHASE): string;
    GetAreaText(area: DcgProto.E_AREA_TYPE): string;
    GetReasonText(area: DcgProto.E_MOVE_REASON): string;
    GetMainPlayerId(): Long;
    JsonToLong(json: any): Long;
    formatString(str: string, ...args: any[]): string;
    GetBattleRoomFight(): DcgProto.Req_RoomFight;
    GetCardInList(list: Array<DtCardBase>, uid: Long): DtCardBase;
    PopCardInList(list: Array<DtCardBase>, uid: Long): DtCardBase;
    GetCardListWithCondition(list: Array<DtCardBase>, func: (card: DtCardBase) => boolean): DtCardBase[];
    CheckCardListWithCondition(list: Array<DtCardBase>, func: (card: DtCardBase) => boolean): boolean;
}
