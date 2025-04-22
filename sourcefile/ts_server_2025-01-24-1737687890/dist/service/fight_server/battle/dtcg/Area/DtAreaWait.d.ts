/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DtCardBase } from "../Card/DtCardBase";
import { DtAreaType } from "../Data/DtEnum";
import { DtArea } from "./DtArea";
export declare class DtAreaWait extends DtArea {
    lastArea: DtAreaType;
    dicCardBeforeData: Map<Long, DtAreaType>;
    PushCard(card: DtCardBase): void;
    PopCard(): DtCardBase;
    PopCardWithId(uid: Long): DtCardBase;
    private SetCardBeforeData;
    private DeleteardData;
    GetCardBeforeData(cardUid: Long): DtAreaType;
}
