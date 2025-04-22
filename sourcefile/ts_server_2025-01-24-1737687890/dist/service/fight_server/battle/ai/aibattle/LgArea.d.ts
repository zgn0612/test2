/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
import { DtAreaType } from "../../dtcg/Data/DtEnum";
import { LgCard } from "./LgCard";
import { LgPlayer } from "./LgPlayer";
export declare class LgArea {
    parent: LgPlayer;
    type: DtAreaType;
    cards: Array<LgCard>;
    constructor(parent: LgPlayer, type: DtAreaType);
    CardCount(): number;
    PopCard(uid: Long): LgCard;
    PushCard(card: LgCard): void;
    GetCard(uid: Long): LgCard;
    HasCard(uid: Long): boolean;
    ForeachCards(func: (card: LgCard) => void): void;
    CheckWithCondition(func: (card: LgCard) => boolean): boolean;
    GetTheCopyCards(): Array<LgCard>;
    GetCountWithMeetCondition(func: (card: LgCard) => boolean): number;
    Reconnect(data: DcgProto.IS_ReconnectCard[]): void;
}
