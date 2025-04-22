"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffSpecialEvoCondition = exports.DtBuffSpecialEvoSeen = exports.SpecialEvoType = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffBase_1 = require("./DtBuffBase");
var SpecialEvoType;
(function (SpecialEvoType) {
    SpecialEvoType[SpecialEvoType["EvoCheckOri"] = 0] = "EvoCheckOri";
    SpecialEvoType[SpecialEvoType["OriCheckEvo"] = 1] = "OriCheckEvo";
    SpecialEvoType[SpecialEvoType["OriCheckEvoCondition"] = 2] = "OriCheckEvoCondition";
})(SpecialEvoType = exports.SpecialEvoType || (exports.SpecialEvoType = {}));
class DtBuffSpecialEvoSeen {
    cardtype;
    color;
    lv;
}
exports.DtBuffSpecialEvoSeen = DtBuffSpecialEvoSeen;
class DtBuffSpecialEvoCondition extends DtBuffBase_1.DtBuffBase {
    evoType;
    willBlock = false;
    func;
    creator;
    constructor(func, creator, type, willBlock) {
        super();
        this.type = DtEnum_1.DtBuffType.SPECIAL_EVO_CONDITION;
        this.func = func;
        this.creator = creator;
        this.evoType = type;
        this.willBlock = willBlock;
    }
    EvoDigimonCanEvoOrigin(originCard) {
        if (this.func) {
            return this.func.call(this.creator, this, originCard);
        }
        return -1;
    }
    OriginDigimonCanEvoCard(evocard) {
        if (this.func) {
            return this.func.call(this.creator, this, evocard);
        }
        return -1;
    }
    IsBuffActive() {
        return false;
    }
    Clear() {
        super.Clear();
        this.func = null;
        this.creator = null;
    }
    SeenData = null;
    SetSeenData(cardtype, color, lv) {
        this.SeenData = new DtBuffSpecialEvoSeen();
        this.SeenData.cardtype = cardtype;
        this.SeenData.color = color;
        this.SeenData.lv = lv;
    }
}
exports.DtBuffSpecialEvoCondition = DtBuffSpecialEvoCondition;
//# sourceMappingURL=DtBuffSpecialEvoCondition.js.map