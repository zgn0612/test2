"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_Restore = void 0;
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_Restore extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnRestore(effect.parent, effect.parent.parent, 1);
    }
}
exports.DtCardOperate_Restore = DtCardOperate_Restore;
//# sourceMappingURL=DtCardOperate_Restore.js.map