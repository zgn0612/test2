import { DtFsmBaseState } from "../../Base/DtFsmBaseState";
import { DtFsmUseCard } from "../DtFsmUseCard";
export declare class DtFsmUseCard_BaseState extends DtFsmBaseState {
    GetMachine(): DtFsmUseCard;
    GetPlayer(): import("../../../Player/DtPlayer").DtPlayer;
}
