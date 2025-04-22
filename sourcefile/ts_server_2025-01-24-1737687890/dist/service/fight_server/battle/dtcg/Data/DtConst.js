"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConst = void 0;
const DtMessageData_1 = require("../Message/DtMessageData");
const DtCardDigimonType_1 = require("./DtCardDigimonType");
const DtEnum_1 = require("./DtEnum");
class DtConst {
    static ACTION_DESTORY = [DtEnum_1.DtActionEffectType.AtkZeroDestroy, DtEnum_1.DtActionEffectType.AttackDestroy, DtEnum_1.DtActionEffectType.EffectDestroy];
    static EFFECT_PLAY = [DtMessageData_1.DtProtoEnum_MoveReason.EffectToBattle, DtMessageData_1.DtProtoEnum_MoveReason.FromOriginToBattle];
    static IsEffectPlayCard(reason) {
        for (let i = 0; i < this.EFFECT_PLAY.length; i++) {
            if (reason == this.EFFECT_PLAY[i]) {
                return true;
            }
        }
        return false;
    }
    static FEATURE_HAS_BIRD = [DtCardDigimonType_1.DtCardDigimonType.type_48, DtCardDigimonType_1.DtCardDigimonType.type_49, DtCardDigimonType_1.DtCardDigimonType.type_50, DtCardDigimonType_1.DtCardDigimonType.type_68,
        DtCardDigimonType_1.DtCardDigimonType.type_69, DtCardDigimonType_1.DtCardDigimonType.type_77, DtCardDigimonType_1.DtCardDigimonType.type_85, DtCardDigimonType_1.DtCardDigimonType.type_97,
        DtCardDigimonType_1.DtCardDigimonType.type_101, DtCardDigimonType_1.DtCardDigimonType.type_103];
}
exports.DtConst = DtConst;
//# sourceMappingURL=DtConst.js.map