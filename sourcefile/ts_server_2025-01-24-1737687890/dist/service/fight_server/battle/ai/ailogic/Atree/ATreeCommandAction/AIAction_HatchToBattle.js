"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_HatchToBattle = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_HatchToBattle extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            let card = this.root.aiCardRoot;
            if (card.areaType == DtEnum_1.DtAreaType.DIGITAMA_HATCH) {
                if (card && card.GetCfgDP() > 0) {
                    this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.HatchToBattle);
                }
            }
        }
        return true;
    }
}
exports.AIAction_HatchToBattle = AIAction_HatchToBattle;
//# sourceMappingURL=AIAction_HatchToBattle.js.map