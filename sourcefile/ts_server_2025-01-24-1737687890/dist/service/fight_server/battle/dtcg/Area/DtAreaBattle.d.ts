/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
import { DtCardBase } from "../Card/DtCardBase";
import { DtAreaType } from "../Data/DtEnum";
import { DtPlayer } from "../Player/DtPlayer";
import { DtArea } from "./DtArea";
export declare class DtAreaBattle extends DtArea {
    dicCardIndex: Map<Long, number>;
    constructor(type: DtAreaType, player: DtPlayer);
    PushCardWithIndex(card: DtCardBase, idx: number): void;
    PushCard(card: DtCardBase): void;
    GetReconnectData(): Array<DcgProto.S_ReconnectCard>;
    private ReSortCards;
    private SetCardIndex;
    GetCardIndex(uid: Long): number;
    CanAddCard(): boolean;
}
