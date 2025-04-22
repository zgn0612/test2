import { DtCardBase } from "../Card/DtCardBase";
import { DtAreaType } from "../Data/DtEnum";
import { DtArea } from "./DtArea";
export declare class DtAreaBrowse extends DtArea {
    lastArea: DtAreaType;
    PushCard(card: DtCardBase): void;
}
