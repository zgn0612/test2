"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_base = void 0;
const ADefine_1 = require("../ADefine");
const ANode_1 = require("../ANode");
class AICon_base extends ANode_1.ANode {
    nParam1;
    sParam1 = "";
    eCompare1;
    eArea1;
    containerType;
    sParam2 = "";
    eBattleSatate;
    eCardType;
    nParam2;
    _DoEvaluate(data) {
        return false;
    }
    ISInCompare(compare, num1, num2) {
        let result = false;
        switch (compare) {
            case ADefine_1.AiFilterCompare.EQUAL:
                if (num1 == num2) {
                    result = true;
                }
                break;
            case ADefine_1.AiFilterCompare.GREATER:
                if (num1 > num2) {
                    result = true;
                }
                break;
            case ADefine_1.AiFilterCompare.GREATER:
                if (num1 > num2) {
                    result = true;
                }
                break;
            case ADefine_1.AiFilterCompare.GREATE_EQUAL:
                if (num1 >= num2) {
                    result = true;
                }
                break;
            case ADefine_1.AiFilterCompare.LESS:
                if (num1 < num2) {
                    result = true;
                }
                break;
            case ADefine_1.AiFilterCompare.LESS_EQUAL:
                if (num1 <= num2) {
                    result = true;
                }
                break;
        }
        return result;
    }
}
exports.AICon_base = AICon_base;
//# sourceMappingURL=AICon_base.js.map