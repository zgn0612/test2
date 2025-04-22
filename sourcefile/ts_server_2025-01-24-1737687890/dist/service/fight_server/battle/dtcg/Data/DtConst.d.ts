import { DtProtoEnum_MoveReason } from "../Message/DtMessageData";
import { DtCardDigimonType } from "./DtCardDigimonType";
import { DtActionEffectType } from "./DtEnum";
export declare class DtConst {
    static readonly ACTION_DESTORY: DtActionEffectType[];
    static readonly EFFECT_PLAY: DtProtoEnum_MoveReason[];
    static IsEffectPlayCard(reason: DtProtoEnum_MoveReason): boolean;
    static readonly FEATURE_HAS_BIRD: DtCardDigimonType[];
}
