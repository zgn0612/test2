import { DtBuffDurationType } from "../../Data/DtEnum";
import { DtEffect } from "./DtEffect";
export declare class DtTimeEffect extends DtEffect {
    buffDurationType: DtBuffDurationType;
    buffDurationParam: number;
    private OnOverFunc;
    private durationComponent;
    TimeSetDurationType(type: DtBuffDurationType, time: number): void;
    SetOverFunc(func: (effect?: DtEffect) => void): void;
    private TimeSetListen;
    private GetThisCreatorPlayerId;
    private RemoveEffect;
    Clear(): void;
}
