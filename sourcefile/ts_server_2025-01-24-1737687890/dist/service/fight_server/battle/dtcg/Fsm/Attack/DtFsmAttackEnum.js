"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttackResult = exports.DtFsmAttackType = void 0;
var DtFsmAttackType;
(function (DtFsmAttackType) {
    DtFsmAttackType[DtFsmAttackType["None"] = 0] = "None";
    DtFsmAttackType[DtFsmAttackType["DefenseAttack"] = 1] = "DefenseAttack";
    DtFsmAttackType[DtFsmAttackType["MonsterAttack"] = 2] = "MonsterAttack";
})(DtFsmAttackType = exports.DtFsmAttackType || (exports.DtFsmAttackType = {}));
var DtFsmAttackResult;
(function (DtFsmAttackResult) {
    DtFsmAttackResult[DtFsmAttackResult["None"] = 0] = "None";
    DtFsmAttackResult[DtFsmAttackResult["AtkDie"] = 1] = "AtkDie";
    DtFsmAttackResult[DtFsmAttackResult["DefDie"] = 2] = "DefDie";
    DtFsmAttackResult[DtFsmAttackResult["AllDie"] = 3] = "AllDie";
})(DtFsmAttackResult = exports.DtFsmAttackResult || (exports.DtFsmAttackResult = {}));
//# sourceMappingURL=DtFsmAttackEnum.js.map