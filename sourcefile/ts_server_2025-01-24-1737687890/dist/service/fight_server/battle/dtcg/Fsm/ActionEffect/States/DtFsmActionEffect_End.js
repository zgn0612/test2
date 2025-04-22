"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_End = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_Init_1 = require("./DtFsmActionEffect_Init");
class DtFsmActionEffect_End extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        let efftype = this.GetMachine().actionEffectType;
        this.GetMachine().receiveCard.lastEffectedType = efftype;
        let msg = new DtEventMsg_1.DtMsg_OnActionEffect(this.GetMachine().receiveCard, efftype);
        msg.casterCard = this.GetMachine().caster;
        msg.extraOtherCard = this.GetMachine().extraOtherCard;
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardOnActEffect, msg);
        if (efftype == DtEnum_1.DtActionEffectType.AtkZeroDestroy || efftype == DtEnum_1.DtActionEffectType.EffectDestroy || efftype == DtEnum_1.DtActionEffectType.AttackDestroy) {
            if (this.GetMachine().param == 1) {
                this.GetMachine().receiveCard.OnDestroy(msg);
            }
        }
        this.GetMachine().ChangeState(DtFsmActionEffect_Init_1.DtFsmActionEffect_Init.name);
        this.GetMachine().receiveCard.CurrentInEffectType = DtEnum_1.DtActionEffectType.None;
        if (this.GetMachine().EndCallBack) {
            this.GetMachine().EndCallBack(true);
            this.GetMachine().EndCallBack = null;
        }
    }
}
exports.DtFsmActionEffect_End = DtFsmActionEffect_End;
//# sourceMappingURL=DtFsmActionEffect_End.js.map