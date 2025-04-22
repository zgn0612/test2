"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_OnAttackDestroy = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_OnAttackDestroy extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        if (this.GetMachine().IsImmueEffect()) {
            this.GetMachine().ForceOver();
            return;
        }
        this.GetMachine().receiveCard.ClearCardOriginListToGy();
        if (this.GetMachine().receiveCard.isToken == true) {
            this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.TOKEN, DtMessageData_1.DtProtoEnum_MoveReason.BattleDestory);
        }
        else {
            this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.BattleDestory);
        }
        if (this.GetMachine().caster) {
            if (this.GetMachine().receiveCard.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.GetMachine().caster.GetPlayer().roundData.AddLogCount(DtEnum_1.DtPlayerLogType.DestroyDigimon);
            }
        }
        this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
    }
}
exports.DtFsmActionEffect_Effecting_OnAttackDestroy = DtFsmActionEffect_Effecting_OnAttackDestroy;
//# sourceMappingURL=DtFsmActionEffect_Effecting_OnAttackDestroy.js.map