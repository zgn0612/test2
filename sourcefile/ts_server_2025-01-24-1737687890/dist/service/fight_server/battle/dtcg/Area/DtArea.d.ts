/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
import { DtCardBase } from "../Card/DtCardBase";
import { DtAreaType } from "../Data/DtEnum";
import { DtProtoEnum_MoveReason } from "../Message/DtMessageData";
import { DtPlayer } from "../Player/DtPlayer";
export declare class DtArea {
    protected parent: DtPlayer;
    protected cards: Array<DtCardBase>;
    areaType: DtAreaType;
    constructor(type: DtAreaType, player: DtPlayer);
    CardCount(): number;
    PushCard(card: DtCardBase, reason?: DtProtoEnum_MoveReason): void;
    UnshiftCard(card: DtCardBase): void;
    PopCard(): DtCardBase;
    PopCardWithId(uid: Long): DtCardBase;
    DeckCardPutInTheBottom(uid: Long): void;
    DeckCardPutInTheTop(uid: Long): void;
    GetCard(uid: Long): DtCardBase;
    GetTopCard(): DtCardBase;
    GetTopCards(nums: number): Array<DtCardBase>;
    GetCardWithCardId(cardid: number): DtCardBase;
    GetTheCopyCards(): Array<DtCardBase>;
    GetReconnectData(): Array<DcgProto.S_ReconnectCard>;
    RandomSort(): void;
    CheckWithCondition(func: (card: DtCardBase) => boolean): boolean;
    GetListWithCondition(func: (card: DtCardBase) => boolean): Array<DtCardBase>;
    GetCountWithMeetCondition(func: (card: DtCardBase) => boolean): number;
    ForeachCards(func: (card: DtCardBase) => void): void;
    GetPlaybackInfo(): Array<number>;
    Clear(): void;
}
